<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['click']);

</script>

<template>
    <button @click=" emit('click')"> Load more Pokemon</button>
</template>

<style>
button {
    background-color: #30a7d7;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 10px;
    width: 150px;
    cursor: pointer;
}
</style>