import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/index.vue'
import Item from './pages/item/index.vue'
import Score from './pages/score/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    }
  ]
})
