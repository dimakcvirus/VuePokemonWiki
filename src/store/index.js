import { createStore } from 'vuex'

export default createStore({
  state: {
    allPokemons: []
  },

  mutations: {
    UPDATE_POKEMONS_DATA(state, payload) {
      state.allPokemons = payload
    }
  },

  actions: {
    addToAllPokemons(context, payload) {
      context.commit('UPDATE_POKEMONS_DATA', payload)
    }
  },

  getters: {
    allPokemons: (state) => {
      return state.allPokemons
    }
  }
})
