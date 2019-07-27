import Vue from 'vue'
import Vuex from 'vuex'
import UserStore from './user-store'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ["user"]
})

export default new Vuex.Store({
  state: {
    
  },
  getters:{
      
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    user: UserStore
  },

  plugins: [vuexLocal.plugin]
})
