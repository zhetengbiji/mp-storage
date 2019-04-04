import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import {
	localStorage
} from 'mp-storage'

Vue.use(Vuex)

const store = new Vuex.Store({
	plugins: [
		createPersistedState({
			storage: localStorage
		})
	],
	state: {
		total: 0
	},
	mutations: {
		add(state) {
			state.total++
		}
	}
})

export default store
