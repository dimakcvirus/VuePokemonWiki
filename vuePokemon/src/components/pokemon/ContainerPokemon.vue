<script setup>
import RightContent from './RightContent.vue';
import { defineProps } from 'vue';
import Stats from './Stats.vue';

const props = defineProps({
  img: String,
  weight: Number,
  height: Number,
  abilites: String,
  category: String,
  types: Object,
  stats: Array,
});
</script>
<template>
  <div class="containerPokemon">
    <div class="leftContent">
      <div class="imgContainer">
        <img class="imgPokemon" :src="props.img" />
      </div>
      <Stats :stats="props.stats" />
    </div>
    <RightContent
      :weight="props.weight"
      :height="props.height"
      :abilites="props.abilites"
      :category="props.category"
      :types="props.types"
    />
  </div>
</template>
<style scoped>
.containerPokemon {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 80px auto;
  flex-wrap: wrap;
}

.leftContent {
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.imgContainer {
  background-color: #f2f2f2;
  height: 459px;
}

.imgPokemon {
  width: 428px;
}

p {
  font-size: 20px;
}
</style>
