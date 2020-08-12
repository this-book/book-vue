import Vue from 'vue'
import Router from 'vue-router'
import helloIBOOK from '../components/helloIBOOK'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloIBOOK',
      component: helloIBOOK
    }
  ]
})
