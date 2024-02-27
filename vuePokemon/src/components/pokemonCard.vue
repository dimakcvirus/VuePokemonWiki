<script setup>
import { defineProps } from 'vue';
import GenerateId from './GenerateId.vue'
defineProps({
    img:Image,
    id:Number,
    name:String
})


</script>

<template>
    <div>
        <!-- <img src="" alt=""> -->
       <GenerateId :id="id"/>
        <validIdd id="fo"></validIdd>
        <validName></validName>
        <pokemonTypes></pokemonTypes>
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