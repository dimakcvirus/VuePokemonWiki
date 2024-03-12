<script setup>
import { defineProps, ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import ContainerNameID from '@/components/pokemon/ContainerNameID.vue';
import ContainerPokemon from '@/components/pokemon/ContainerPokemon.vue';
import Evolutions from './Evolutions.vue';

let isFirst = ref(true);
const route = useRoute();
const route2 = useRouter();
const id = computed(() => route.params.id);

const pokemon = ref({});
const store = useStore();
const category = ref(null);

onMounted(async () => {
  if (store.getters.allPokemons.length) {
    const pokemon2 = store.getters.allPokemons.find((item) => item.id === Number(id.value));
    if (pokemon2) {
      pokemon.value = pokemon2;
    }
  } else {
    await getData();
  }

  gettinCategory(pokemon.value.id);
});

const getData = async () => {
  const pokemonData = await getPokemon(id.value);
  const pokemonTypes = pokemonData.types.map((typeInfo) => typeInfo.type.name);

  // Обновление референса pokemon новыми данными, включая типы
  pokemon.value = {
    ...pokemonData, // Распространение всех существующих свойств pokemonData
    pokemonTypes, // Добавление нового свойства pokemonTypes с массивом типов
  };
};

const getPokemon = async (id) => {
  const urlPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await urlPokemon.json();
  return data;
};

async function gettinCategory(pokemonID) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`);
  let json = await response.json();

  json.genera.forEach((index) => {
    if (index.language.name === 'en') {
      const categoryValue = index.genus.split(' ', 2);
      category.value = categoryValue[0].toLowerCase();
    }
  });
}

const switchPokemons = async (switcher) => {
  let newID = pokemon.value.id;
  if (switcher === 'next') {
    newID += 1;
    console.log('+');
  }
  if (switcher === 'back' && newID != 1) {
    newID -= 1;
    console.log('-');
  }
  if (newID >= 1) {
    route2.push({ path: `/pokemons/${newID}` }); // Обновляем маршрут с новым значением id
    if (store.getters.allPokemons.length) {
      const pokemon2 = store.getters.allPokemons.find((item) => item.id === Number(newID));
      if (pokemon2) {
        pokemon.value = pokemon2;
      }
    } else {
      await getData();
    }
  }
  if (newID == 1) {
    isFirst.value = true;
  } else {
    isFirst.value = false;
  }
};
</script>
<template>
  <div class="home">
    <router-link class="back" to="/">На Главную</router-link>
  </div>
  <div class="groupButton">
    <button v-if="!isFirst" @click="switchPokemons('back')">Предыдущий</button>
    <button @click="switchPokemons('next')">Следующий</button>
  </div>
  <div class="test" v-if="pokemon && pokemon.sprites">
    <ContainerNameID class="containerNameId" :name="pokemon.name" :id="pokemon.id" />
    <ContainerPokemon
      :img="pokemon.sprites.other['official-artwork'].front_default"
      :weight="pokemon.weight"
      :height="pokemon.height"
      :abilites="pokemon.abilities[0].ability.name"
      :category="category"
      :types="pokemon.pokemonTypes"
      :stats="pokemon.stats"
    />
    <Evolutions
      @update:id="
        (updatedId) => {
          pokemon.id = updatedId;
        }
      "
      :id="pokemon.id.toString()"
    />
  </div>
</template>

<style scoped>
.home a {
  display: flex;
  background-color: bisque;
  width: 100px;
  height: 60px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  color: black;
  text-decoration: none;
  margin: auto;
}

.groupButton {
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
}

.namePokemon {
  font-size: 32px;
}

.test {
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  background-color: white;
}
</style>
