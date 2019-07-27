import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import appRoutes from './app-routes'
import NotFoundPage from '../views/NotFoundPage'
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: () => import('../views/MainPage'),
      meta:{
        requiresAuth: true
      },
      children: appRoutes
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage')
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let isAuthorized = store.getters["user/isAuthorized"];  
    if (!isAuthorized) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // всегда так или иначе нужно вызвать next()!
  }
})
export default router;
