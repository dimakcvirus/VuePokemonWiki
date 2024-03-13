<script setup>
import { defineProps } from 'vue';
import PokemonCard from './pokemonCard.vue';

const props = defineProps({
  pokemonList: Array
});
</script>

<template >
  <div class="cardPokemons">
    <PokemonCard
      v-for="pokemon in props.pokemonList"
      :key="pokemon.id"
      :img="pokemon.sprites.other['official-artwork'].front_default"
      :id="pokemon.id"
      :name="pokemon.name"
      :types="pokemon.pokemonTypes"
    />
  </div>
</template>

<style>
.cardPokemons{
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}
</style>