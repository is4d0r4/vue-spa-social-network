import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [ //rota inicial
    {
      path: '/',
      name: 'Home', //nome do arquivo
      component: Home //nome do componente
    }
  ]
})
