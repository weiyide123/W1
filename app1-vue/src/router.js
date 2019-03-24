import Vue from 'vue'
import Router from 'vue-router'
import movie from './views/movie/Movie.vue'
import music from  './views/music/Music.vue'
import cute from './views/cute/Cute.vue'
import ilike from './views/ilike/Ilike.vue'
import musicList from './views/music/musicList.vue'
import moviedt from './views/movie/Moviedt.vue'
import  Slide from './components/Slide.vue'
import ilikedetail from './views/ilike/IlikeDetail.vue'

Vue.use(Router)

export default new Router1({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/movie',
      component:movie,
    },  
    {
      path:'/', 
      redirect:'/movie',
    },
    {
      path:'/music',
      component:music
    },
    {
      path:'/cute',
      component:cute
    },
    {
      path:'/ilike',
      component:ilike
    },
    {
      path:'/ilikedetail/:index',
      component:ilikedetail
    },
    {
      path:'/musiclist',
      component:musicList
    },
    {
      path:'/moviedt/:movieID',
      component:moviedt
    },
    {
      path:'/slide',
      component:Slide
    }
  ]
})
