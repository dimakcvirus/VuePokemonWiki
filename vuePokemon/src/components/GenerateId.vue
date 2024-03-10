<script setup>
import { defineProps, computed } from 'vue';
const props =defineProps(
    {
        id: Number,
      
    }
)

const computedID = computed(() => {
  return getId(props.id)
})

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
</script>

<template>
    <div class="textIdPok">{{ computedID }}</div>
</template>

<style>
</style>