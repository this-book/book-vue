import Vue from 'vue'
import Router from 'vue-router'
import helloIBOOK from '../components/helloIBOOK'
import ChapterIndex from '../view/chapter/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloIBOOK',
      component: helloIBOOK
    },
    {
      path: '/chapter/getChapters',
      name: 'getChapters',
      component: ChapterIndex
    }

  ]
})
