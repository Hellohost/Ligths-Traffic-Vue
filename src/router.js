import Vue from 'vue'
import Router from 'vue-router'
import Red from './views/Red.vue'
import Yellow from './views/Yellow.vue'
import Green from './views/Green.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Red
    },
    {
      path: '/1',
      name: 'red',
      component: Red
    },
    {
      path: '/2',
      name: 'yellow',
      component: Yellow
    },
    {
      path: '/3',
      name: 'green',
      component: Green
    }
  ]
})
