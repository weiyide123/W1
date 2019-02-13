import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mine from './views/Mine.vue'
import Text from './views/Text.vue'
import A from './views/A.vue'
import B from './views/B.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:name/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'/text',
      component:Text,
      children:[{
        path:'/a',
        component:A
      },
      {
        path:'/b',
        component:B
      }
    ]
    },
    {
      path:'/bb/:name/:id',
      redirect:'/about/:name/:id'

    }
  ]
})
