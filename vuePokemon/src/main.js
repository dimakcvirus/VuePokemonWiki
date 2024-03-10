import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import MainContainer from './components/MainContainer.vue'
import InerPokemonContainer from '@/components/pokemon/InerPokemonContainer.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      component: MainContainer
    },
    {
      path: '/pokemons/:id',
      component: InerPokemonContainer
    }
  ],
  history: createWebHistory()
})
createApp(App).use(router).use(store).mount('#app')
