<script setup>
import { defineProps, defineEmits } from 'vue';
import GenerateId from './GenerateId.vue'
import TypePokemon from './TypePokemon.vue';
import NameUpperCase from './NameUpperCase.vue';
const props  = defineProps({
    img:String,
    id:Number,
    name:String,
    types:Object
})

</script>

<template>
    <div class="cardPok">
        <router-link :to="`/pokemons/${props.id}`">
            <img :src= img>
        </router-link>
        <div class="informElements">
            <GenerateId :id="props.id"/>
            <NameUpperCase :name="props.name"/>
            <TypePokemon :types="props.types"/>
        </div>
    </div>
</template>

<style scoped>
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