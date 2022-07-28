import { createStore } from 'vuex'
import router from '../router'

const store = createStore({
  state: {
    user_token: "",
    isAuthenticated: false,
  },
  mutations: { 
    SET_USER_DETAILS (state, payload) { 
      state.user_token = payload
    },
    IS_AUTHENTICATED (state, payload) { 
      state.isAuthenticated = payload
    }
  }, 
  actions: { 
    // set user after login
    async setUser({ commit }, payload) { 
      commit('SET_USER_DETAILS', payload) 
      commit('IS_AUTHENTICATED', true) 
      // set localStorage 
      localStorage.setItem('token', payload)
      localStorage.setItem('isAuthenticated', true)

      router.push('/dashboard')
    }, 
    // persist state
    async loadStoredState({ commit }) {
      const loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));

      if (loggedIn) {
        const token = localStorage.getItem("token");
        commit('SET_USER_DETAILS', token) 
        commit('IS_AUTHENTICATED', true) 
      } else {
        commit('IS_AUTHENTICATED', false) 
      }
    },
    async destroyUser({ commit }) {
      commit('SET_USER_DETAILS', "") 
      commit('IS_AUTHENTICATED', false) 

      // set localStorage 
      localStorage.setItem('token', "")
      localStorage.setItem('isAuthenticated', false)
      router.push('/')
    }
  }, 
  modules: { 
  }, 
}) 


export default store;