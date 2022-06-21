// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', //renderiza no index.html tudo que está no src//
  router,
  components: { App }, //só pega o componente app//
  template: '<App/>' //só usa o template do app
})
