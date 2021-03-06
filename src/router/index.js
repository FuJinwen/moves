import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import MovieDetail from '@/components/movie/movieDetail'
import MusicDetail from '@/components/music/MusicDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie
    },
    {
      path:'/music',
      name:'Music',
      component:Music
    },
    {
      path:'/book',
      name:'Book',
      component:Book
    },
    {
      path:'/photo',
      name:'Photo',
      component:Photo
    },
    {
      path:'/movieDetail',
      name:'MovieDetail',
      component:MovieDetail
    },
    {
      path:'/musicDetail',
      name:'MusicDetail',
      component:MusicDetail
    }
  ]
})
