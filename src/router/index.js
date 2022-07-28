import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      auth: true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated
  const requiresAuth = to.matched.some(x => x.meta.auth)

  if (requiresAuth && isAuthenticated == false) {
    // redirect the user to the login page
    next('/')
  } else if (to.name == 'login' && isAuthenticated == true) {
    next('/dashboard')
  } else {
    next()
  }
})


export default router
