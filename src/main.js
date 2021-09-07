import Vue from 'vue'
import App from './App.vue'
import router from './router'
import styles from './scss/styles.scss'
import animate from 'animate.css'
import vuetify from './plugins/vuetify'
import VueFilter from 'vue-filter'
import vueFiltersCollection from 'vue-filters-collection'

Vue.config.productionTip = false
Vue.use(vueFiltersCollection);

new Vue({
  router,
  animate,
  styles,
  vuetify,
  VueFilter,
  vueFiltersCollection,
  render: h => h(App)
}).$mount('#app')
