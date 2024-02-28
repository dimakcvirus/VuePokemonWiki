<script setup>
import { ref, onMounted } from 'vue';
import CardPokemons from './CardPokemons.vue';
import Button from './Button.vue';

const BASE_URL = "https://pokeapi.co/api/v2/";
const LIMIT_POKEMON = 12;
let pokemonList = ref([]);
let offsetPok = ref(0);

console.log(offsetPok) 

const getPokemons = async () => {
    let innerBase = []
    const response = await fetch(
        `${BASE_URL}pokemon/?limit=${LIMIT_POKEMON}&offset=${offsetPok.value}`
    );
    const data = await response.json();
    const parametersPokemons = data.results;

    await Promise.allSettled(
        parametersPokemons.map(async (parametrPokemon) => {
            const pokemonData = await getPokemon(parametrPokemon.url);
            const pokemonTypes = pokemonData.types.map((item) => {
                return item.type.name
            })
            innerBase.push({ ...pokemonData, pokemonTypes: pokemonTypes });
        })

    );
    innerBase.sort((a, b) => {
        return a.id - b.id;
    });

    return innerBase;
    
}

// onMounted(() => {
//     getPokemons().then(res => {
//         base.value = res;
//     });
// });

onMounted(async () => {
    const innerBase = await getPokemons();
    console.log(innerBase)
    pokemonList.value.push(...innerBase)
});

const getPokemon = async (pokemonUrl) => {
    const response = await fetch(pokemonUrl);
    const pokemonData = await response.json();
    return pokemonData;
};


const  Hendler = async () => {
    const number = 12;
    offsetPok.value += number;
    const innerBase = await getPokemons(offsetPok.value);
    pokemonList.value.push(...innerBase);
}
</script>

<template>

     <div class="mainContainer">
        <CardPokemons :pokemonList="pokemonList" v-if="pokemonList.length" />
        <Button @click="Hendler()" />
    </div>
</template>

<style>
.groupCardPoc {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.mainContainer {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
