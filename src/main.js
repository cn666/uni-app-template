import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import '@/configs/filter'
import '@/configs/uview'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
