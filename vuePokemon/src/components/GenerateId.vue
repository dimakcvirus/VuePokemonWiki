<script setup>
import { defineProps } from 'vue';
const props =defineProps(
    {
        id: Number,
      
    }
)
const ids = props.id

const getId = (id) => {
  const pokemonId = id;
  let stringPokemonId = pokemonId.toString();

  switch (stringPokemonId.length) {
    case 1:
      return `#000${pokemonId}`;
    case 2:
      return `#00${pokemonId}`;
    case 3:
      return `#0${pokemonId}`;
    case 4:
      return `#${pokemonId}`;
    default:
      return `#000${pokemonId}`;
  }

};

const formattedId = getId(ids);
</script>

<template>
    <div class="textIdPok">{{ formattedId }}</div>
</template>

<style>
</style>