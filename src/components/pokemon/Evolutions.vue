<script setup>
import { onMounted, ref, watch } from 'vue';
import GenerateId from '../GenerateId.vue';
import TypePokemon from '../TypePokemon.vue';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const pokemonNames = ref([]);
const pokemonsGroups = ref([]);

onMounted(() => {
  addevoGroup(props.id);
});

watch(props, (newValue) => {
  addevoGroup(newValue.id);
});

//функция которая получает группу покемонов эволюции
const addevoGroup = async (id) => {
  pokemonNames.value = [];
  pokemonsGroups.value = [];
  let idPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  let json = await idPokemon.json();
  const url = json.evolution_chain.url;
  // console.log(url);
  setevoGroup(url);
};

//функция которая принимаю ссылку на группу покемонов эволюции
const setevoGroup = async (url) => {
  let idPokemon = await fetch(url);
  let json = await idPokemon.json();
  // console.log(json);
  gettingNamesPokemonGroup(json.chain);
  loadPokemonData(pokemonNames.value);
};

//функция которя получает имена покемонов из группы эволюции
const gettingNamesPokemonGroup = (evol) => {
  let evolutionSpeciesName = evol.species.name;
  pokemonNames.value.push(evolutionSpeciesName);
  if (evol.evolves_to.length) {
    evol.evolves_to.forEach((nextEvolution) => {
      gettingNamesPokemonGroup(nextEvolution); //evol.evol.evolves_to[0]
    });
  }
};

// фукнция которя принимает имя покемона и загружает о нем все данные
const loadPokemonData = async (urlPok) => {
  Promise.allSettled(
    urlPok.map(async (parametrPokemon) => {
      let urlPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametrPokemon}/`);
      let data = await urlPokemon.json();
      const namePokemon = data.name;
      const idPokemon = data.id;
      const img = data.sprites.other['official-artwork'].front_default;
      const pokemonTypes = data.types.map((item) => {
        return item.type.name;
      });

      pokemonsGroups.value.push({ name: namePokemon, id: idPokemon, img: img, pokemonTypes });
    }),
  );
};
</script>

<template>
  <div class="containerEvolutions">
    <h2>Evolutions</h2>

    <div class="evolution-items">
      <div v-for="item in pokemonsGroups" :key="item.id" class="evolution-item">
        <a>
          <img class="imgEvolution" :src="item.img" />
        </a>

        <h3 class="nameEvolution">
          {{ item.name }}
          <span class="idEvolution">
            <GenerateId :id="item.id" />
          </span>
        </h3>

        <TypePokemon :types="item.pokemonTypes" />
      </div>
    </div>
  </div>
</template>

<style>
.imgEvolution {
  border-radius: 50%;
  border: solid 10px white;
  width: 235px;
}

.evolution-items {
  display: flex;
  gap: 25px;
  width: 100%;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.evolution-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.containerEvolutions {
  background-image: url(../../img/body_gray_bg.png);
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 25px;
  color: white;
}
.nameEvolution {
  color: white;
  font-size: 23px;
  display: flex;
}
.idEvolution {
  color: grey;
}
</style>
