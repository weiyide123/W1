import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mine from './views/Mine.vue'
import Text from './views/Text.vue'
import A from './views/A.vue'
import B from './views/B.vue'
import Count from './views/Count.vue'
import Error from './views/Error.vue'

Vue.use(Router)

export default new Router({
  mode:'history',  
  // base:Process.env.BASE_URL,
  // 默认hash，如果不写的时候

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to,from,next){
        console.log(to,from,next);
        next();
      }
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
    },
    {
      path:'/',
      alias:'/abc',
      component:Home
    },{
      path:'/count',
      component:Count
    },
    {
      path:'*',
      component:Error
    }
  ]
})
