import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"",
    name:""
  },
  mutations: {
    change(state,obj){
      state.color=obj.bcolor;
      state.name=obj.name;
    }
  },
  actions: {
  }
})
