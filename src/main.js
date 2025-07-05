import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Profile from './pages/Profile.vue'
import Matching from './pages/Matching.vue'
import Events from './pages/Events.vue'
import { isLoggedIn } from '@/utils/auth'

const routes = [
    { path: '/', component: Home },
    {
        path: '/login',
        component: Home,
        meta: { showLoginModal: true }
    },
    { 
        path: '/profile', 
        component: Profile,
        meta: { requiresAuth: true }
    },
    { 
        path: '/matching', 
        component: Matching,
        meta: { requiresAuth: true } 
    },
    { 
        path: '/events', 
        component: Events,
        meta: { requiresAuth: true } 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    next('/login')
  } else {
    next()
  }
})

createApp(App)
    .use(router)
    .mount('#app')
