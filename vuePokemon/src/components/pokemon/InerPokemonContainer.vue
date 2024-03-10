<script setup>
import { defineProps,ref, onMounted, computed} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import ContainerNameID from '@/components/pokemon/ContainerNameID.vue'
import ContainerPokemon from '@/components/pokemon/ContainerPokemon.vue'
import Evolutions from './Evolutions.vue'


const route = useRoute()
const id = computed(() => route.params.id)
// let pokemonNames = ref([]);
const pokemon = ref({})
const store = useStore()
const category = ref(null);





const getData = async () => {
  const pokemonData = await getPokemon(id.value);
  const pokemonTypes = pokemonData.types.map(typeInfo => (typeInfo.type.name));

  // Обновление референса pokemon новыми данными, включая типы
  pokemon.value = {
    ...pokemonData, // Распространение всех существующих свойств pokemonData
    pokemonTypes // Добавление нового свойства pokemonTypes с массивом типов
  };

}

const getPokemon = async (id) => {
  const urlPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await urlPokemon.json();
  console.log(2222,data)
    return data;

};


onMounted( async () => {
  // addevoGroup(id.value)
  
  if (store.getters.allPokemons.length){
      const pokemon2 = store.getters.allPokemons.find(item => item.id === Number(id.value)) 
      if(pokemon2){
        pokemon.value = pokemon2
      }

  }
  else {
          await getData()
        }
        
        gettinCategory(pokemon.value.id)
})


async function gettinCategory(pokemonID) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`);
  let json = await response.json();

  json.genera.forEach((index) => {
    if (index.language.name === "en") {
      const categoryValue = index.genus.split(" ", 2);
      category.value = categoryValue[0].toLowerCase();
    }
  });
}

const next = async () => {
  const newId = pokemon.value.id + 1;
  console.log(newId)
  await getData(newId);
  await getPokemon(newId)
}


</script>
<template>
      <div class="home">
        <router-link to="/">back2</router-link>

    </div>
    <div class="groupButton">
        <button @click="next">назад</button>
        <button>вперед</button>
    </div>
    <div class="test" v-if="pokemon && pokemon.sprites">
    <ContainerNameID class="containerNameId" :name="pokemon.name" :id="pokemon.id" />
    <ContainerPokemon 
      :img="pokemon.sprites.other['official-artwork'].front_default" 
      :weight="pokemon.weight" 
      :height="pokemon.height"
      :abilites="pokemon.abilities[0].ability.name"
      :category="category"
      :types = 'pokemon.pokemonTypes'
      :stats = 'pokemon.stats'
    />
    <Evolutions :id="pokemon.id.toString()" />
  </div>


</template>

<style scoped>
.home a{
    display: flex;
    background-color: azure;
    width: 80px;
    height: 40px;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    color: black;
    text-decoration: none;
}
.groupButton{
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
}
.namePokemon{
  font-size: 32px;
}
.test{
  max-width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    background-color: white;
}
</style>