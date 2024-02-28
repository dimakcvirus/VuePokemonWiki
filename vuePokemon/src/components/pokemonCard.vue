<script setup>
import { defineProps } from 'vue';
import GenerateId from './GenerateId.vue'
import TypePokemon from './TypePokemon.vue';
import NameUpperCase from './NameUpperCase.vue';
defineProps({
    img:String,
    id:Number,
    name:String,
    types:Object
})

</script>

<template>
    <div class="cardPok">
        <a><img :src= img></a>
        <div class="informElements">
            <GenerateId :id="id"/>
            <NameUpperCase :name="name"/>
            <TypePokemon :types="types"/>
        </div>
    </div>
</template>

<style>
.textIdPoc {
    color: #919191;
}

.cardPok {
    width: 205px;
    height: 390px;
    background-color: white;
}

.informElements {
    padding: 0 10px;
}

img {
    width: 205px;
    height: 205px;
    background-color: #f2f2f2;
}
</style>