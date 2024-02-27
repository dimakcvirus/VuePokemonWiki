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





// const handleEvent = (eventData) => {
//     offsetPok.value = eventData
//     console.log('Получено событие:', offsetPok.value);
// };

</script>

<template>
<p>{{ props.base.name }}</p>
</template>

<style></style>