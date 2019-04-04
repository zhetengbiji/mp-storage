import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
// 手动挂载 store 对象
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
