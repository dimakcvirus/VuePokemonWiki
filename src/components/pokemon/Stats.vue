<script setup>
const maxStat = 200; // максимальное значение статов
const countOfStatsPoint = 15; // максимальное значение шкалы значений
const fillColor = '#30a7d7'; // цвет на который меняем ли
const pokemonStats = {}; // обекты которые содержащие статы покемонов

defineProps({
  stats: {
    type: Array,
    default: () => [],
  },
});
const highlighter = (index, baseStat) => {
  const test = (baseStat / maxStat) * countOfStatsPoint;
  const test2 = countOfStatsPoint - test;
  if (index <= test2) {
    return true;
  }
};
</script>

<template>
  <div class="contanerStats">
    <h3>Stats</h3>
    <div class="cont">
      <div v-for="item in stats" class="stats-wrapper">
        <ul class="stats-items">
          <li
            v-for="(numberLi, index) in new Array(countOfStatsPoint)"
            class="statsItem"
            :class="{ active: highlighter(index, item.base_stat) }"
          ></li>
        </ul>
        <div class="stats-title">
          {{ item.stat.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cont {
  display: flex;
  padding-left: 0;
  font-size: 14px;
  gap: 5px;
  text-align: center;
  align-items: flex-start;
  justify-content: center;
}

.contanerStats {
  background-color: #a4a4a4;
  border-radius: 10px;
  padding: 10px 25px;
}

.stats-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contanerStats h3 {
  margin: 0;
  font-weight: 500;
}

.stats-title {
  width: min-content;
}

.stats-items {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 0px;
  padding: 5px;
}

.statsItem {
  background-color: rgb(48, 167, 215);
  width: 50px;
  height: 10px;
}

.statsItem.active {
  background-color: white;
}
</style>
