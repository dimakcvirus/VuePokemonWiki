<script setup>
import { defineProps } from 'vue';
import TypePokemon from '../TypePokemon.vue';


const test =defineProps ({
    weight: Number,
    height: Number,
    abilites: String,
    category: String,
    types: Object
})

console.log(test.pokemonTypes)
</script>  

<template>
<div class="rightContent">
    <p>There is a plant seed on its back right from the day
       this Pokémon is born. The seed slowly grows larger.
    </p> 
    <div class="containerVersion">
        <span>Version</span>
        <img class="blue" src="/src/img/pngwing.com.png">
        <img class="red" src="/src/img/pngwing.com.png" alt="">
    </div>
    <div class="abilites">
        <ul>
            <li>Height</li>
            <li>{{ height }}</li>
            <li>Weight</li>
            <li>{{ weight }}</li>
            <li>Gender</li>
            <li>
                <img src="/src/img/female.png">
                <img src="/src/img/male.png">
            </li>
        </ul>
        <ul>
            <li>Category</li>
            <li>{{category}}</li>
            <li>Abilites</li>
            <li>{{abilites}}</li>
        </ul>
    </div>
    <div>
        <TypePokemon :types="test.types" />
        <h3>Weaknesses</h3>
        <div class="weaknesses">
            <span class="fire pokemonType">Fire</span>
            <span class="ice pokemonType">Ice</span>
            <span class="flying pokemonType">Flying</span>
            <span class="psychic pokemonType">Psychic</span>
        </div>
    </div>
</div>

</template>

<style>
.rightContent{
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}


.blue {
    width: 40px;
    background-color: #4592c4;
    border-radius:20px ;
}
.red { 
    width: 40px;
    background-color: red;
    border-radius: 20px;
}
.abilites {
    display: flex;
    font-size: 18px;
    background-color: #30a7d7;
    border-radius: 15px;
    gap: 20%;
}
ul {
    list-style-type: none;
    padding-left: 20px;
}
.abilites li:nth-last-child(even) {
    color: #fff;
}
.weaknesses{
display: flex;
    gap: 5px;
    width: 450px;
    flex-wrap: wrap;
}
img{
    width: 20px;
}
.containerVersion {
    display: flex;
    gap: 10px;
    font-size: 25px;
}


</style>