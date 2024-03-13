<script setup>
import { defineProps } from 'vue';
import GenerateId from '../GenerateId.vue';
import NameUpperCase from '../NameUpperCase.vue';

const props = defineProps({
  name: { type: String, default: 'bulbasaur' },
  id: { type: Number, default: 13 },
});
</script>

<template>
  <div class="">
    <NameUpperCase :name="props.name" />
    <GenerateId :id="props.id" />
  </div>
</template>

<style>
.containerNameId {
  display: flex;
  justify-content: center;
  font-size: 32px;
  gap: 15px;
  margin: 20px auto;
}
</style>
