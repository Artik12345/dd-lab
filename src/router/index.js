import Vue from 'vue'
import Router from 'vue-router'
import ContentFirstView from '@/components/ContentFirstView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/actual',
      name: 'ContentFirstView',
      component: ContentFirstView
    }
  ]
})
