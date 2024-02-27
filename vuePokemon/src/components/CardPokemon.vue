<script setup>
import { defineProps,onMounted } from 'vue';

const props = defineProps({
  base: Object
});

onMounted(() => {
    console.log(props.base)
});

// watch( () => props.offsetPok, (first, second) => {
//    getPokemons();
//  });


const name = props.base.name;
const id = props.base.id;


// const handleEvent = (eventData) => {
//     offsetPok.value = eventData
//     console.log('Получено событие:', offsetPok.value);
// };

</script>

<template>
<p>{{ name }}</p>
<p>{{ id }}</p>
</template>

<style></style>