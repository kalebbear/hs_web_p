

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
    state: {
        type: ''
    },
    mutations: {
        SET_TYPE (state, type) {
            state.type = type;
        }
    },
    actions: {
        setType ({ commit }) {
            console.log('_disp')
            commit('SET_TYPE', localStorage.type)
        },
    }
})

export default store
