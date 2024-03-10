<script setup>
import { ref } from 'vue';
import GenerateId from '../GenerateId.vue'
import TypePokemon from '../TypePokemon.vue'
const props = defineProps({
id:String
})
//функция которая получает группу покемонов эволюции

async function addevoGroup(id) {
  let idPokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  let json = await idPokemon.json();
  const url = json.evolution_chain.url;
  console.log(url);
 setevoGroup(url);
}
addevoGroup( props.id)


//функция которая принимаю ссылку на группу покемонов эволюции
async function setevoGroup(url) {
  let idPokemon = await fetch(url);
  let json = await idPokemon.json();
  console.log(json)
  gettingNamesPokemonGroup(json.chain);
  loadPokemonData(pokemonNames.value);
//   gettingNamesPokemonGroup
}



const pokemonNames = ref([])
//функция которя получает имена покемонов из группы эволюции
function gettingNamesPokemonGroup(evol) {
  let evolutionSpeciesName = evol.species.name;
  pokemonNames.value.push(evolutionSpeciesName);
  if (evol.evolves_to.length) {
    evol.evolves_to.forEach((nextEvolution) => {
      gettingNamesPokemonGroup(nextEvolution); //evol.evol.evolves_to[0]
    });
  }
}

const mass = ref([])

// фукнция которя принимает имя покемона и загружает о нем все данные
async function loadPokemonData(urlPok) {
     Promise.allSettled(urlPok.map(async (parametrPokemon) => {
       let urlPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametrPokemon}/`);
       let data = await urlPokemon.json();
       const namePokemon = data.name;
       const idPokemon = data.id;
       const img = data.sprites.other["official-artwork"].front_default;
       const pokemonTypes = data.types.map((item) => {
                return item.type.name
       })
       
            mass.value.push({name:namePokemon, id:idPokemon, img:img, pokemonTypes })
            
     }))
  
  }

</script>

<template>
    <div class="containerEvolutions">
        <h2>Evolutions</h2>
        <div class="evolution-items">
            <div  v-for="item in mass" class="evolution-item">
                <a>
                    <img class="imgEvolution" :src="item.img">
                </a>
                <h3>
                    {{ item.name }}
                    <span> <GenerateId :id="item.id"/></span>
                </h3>
                <TypePokemon :types="item.pokemonTypes" />
            </div>
        </div>


    </div>



</template>

<style>
.imgEvolution{
    border-radius: 50%;
    border: solid 10px white;
    width: 235px;
}
.evolution-items{
    display: flex;
    gap: 25px;
    width: 100%;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
    justify-content: center;
}
.evolution-item{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.containerEvolutions{
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




</style>