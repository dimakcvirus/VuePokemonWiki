<script setup>

 const props = defineProps(
    {
        types: { type: Array, default: () => [] }


      
    }
)
</script>


<template  >

    <div v-if="props.types.length" class=" typePok">
        <span :class="'pokemonType ' + type" v-for="(type, index) in props.types">{{ type }}</span>
      
    </div>
    
</template>

<style>
.typePok {
    display: flex;
    gap: 5px;
    width: 210px;
    flex-wrap: wrap;
}

.pokemonType {
    border-radius: 5px;
    width: 95px;
    height: 32px;
    text-align: center;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.grass {
    background-color: #9bcc50;
}

.poison {
    background-color: #b97fc9;
}

.fire {
    background-color: #fd7d24;
}

.flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
}

.ghost {
    background-color: #7b62a3;
}

.water {
    background-color: #4592c4;
}

.bug {
    background-color: #729f3f;
}

.dark {
    background-color: #a4a4a4;
}

.dragon {
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
}

.electric {
    background-color: #eed535;
}

.fairy {
    background-color: #fdb9e9;
}

.fighting {
    background-color: #d56723;
}

.ground {
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
}

.ice {
    background-color: #51c4e7;
}

.normal {
    background-color: #a4acaf;
}

.psychic {
    background-color: #f366b9;
}

.rock {
    background-color: #a38c21;
}

.steel {
    background-color: #9eb7b8;
}

.bug,
.dark,
.dragon,
.fighting,
.fire,
.ghost,
.poison,
.psychic,
.rock,
.water {
    color: white;
}
</style>