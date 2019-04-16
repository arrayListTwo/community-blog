import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Home from '@/views/Home'
import Article from '@/views/Article'
import CreateArticle from '@/views/CreateArticle'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/articles/create',
      component: CreateArticle
    },
    {
      path: '/article/:id',
      component: Article
    },
    {
      path: '/',
      component: Home
    }
  ]
})
export default router
