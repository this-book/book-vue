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
    /*章节路由*/
    {
      path: '/chapter/getChapters',
      name: 'getChapters',
      component: ChapterIndex
    }

  ]
})
