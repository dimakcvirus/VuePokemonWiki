<script setup>
import { ref, onMounted } from 'vue';
import CardPokemon from './CardPokemon.vue';
import ButtonNext from './ButtonNext.vue';


// под вопросом
// const Hendler = () => {
//     offsetPok += 12
    
// }

const BASE_URL = "https://pokeapi.co/api/v2/";
const LIMIT_POKEMON = 12;
let base = ref([]);
let offsetPok = 0;

const getPokemons = async () => {
    let innerBase = []
    const response = await fetch(
        `${BASE_URL}pokemon/?limit=${LIMIT_POKEMON}&offset=${offsetPok}`
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
    // console.log(base)
}

onMounted(() => {
    getPokemons().then(res => {
        base.value = res;
    });
});

const getPokemon = async (pokemonUrl) => {
    const response = await fetch(pokemonUrl);
    const pokemonData = await response.json();
    return pokemonData;
};
</script>

<template>
    <!-- <div class="mainContainer">
        <div class="groupCardPoc">
            <CardPokemon :offsetPok="offsetPok"/>
        </div>
        <ButtonNext @click="Hendler()" />
    </div> -->
     <div class="mainContainer">
        <div  class="pokemonCards">
            <!-- <pokemonCard :pokemonData="card"/> -->
        </div>
        <CardPokemon :base="base[1]" v-if="base.length" />
        <ButtonNext @click="Hendler()" />
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
