import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        numb: 10,

    },
    mutations: {
        addNumb: function(state) {
            state.numb++
        }
    },
    actions: {},
    modules: {}
})