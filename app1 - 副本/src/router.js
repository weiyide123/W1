import Vue from 'vue'
import Router from 'vue-router'
import movie from './views/movie/Movie.vue'
import music from  './views/music/Music.vue'
import cute from './views/cute/Cute.vue'
import ilike from './views/ilike/Ilike.vue'
import musicList from './views/music/musicList.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/movie',
      component:movie,
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
      path:'/musiclist',
      component:musicList
    }
  ]
})
