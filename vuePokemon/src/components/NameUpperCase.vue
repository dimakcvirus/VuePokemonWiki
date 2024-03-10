<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    name:String
}

)
// const name = props.name

// function ucFirst(name) {
//   if (!name) return name;
//   return name[0].toUpperCase() + name.slice(1);
// }

// const names = ucFirst(name)


//computed часто используется для вычисления значений для отображения в шаблоне
const computedName = computed(() => {
    return props.name[0].toUpperCase() + props.name.slice(1)
}) 
</script>

<template>
    <h2 class="namePokemon">{{ computedName }} </h2> 
</template>
<style>
.namePokemon{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
    font-size: 20px;
}
</style>
