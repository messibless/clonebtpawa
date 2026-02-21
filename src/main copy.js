import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router'

const SectionGrow6 = () => import('./components/Middle/grow-6/SectionGrow6.vue')
const JoinNow = () => import('./Join.vue')
const Login = () => import('./Login.vue')
const pinia = createPinia()
const routes = [
  {
    path: '/',
    name: 'SectionGrow6',
    component: SectionGrow6,
  },
  {
    path: '/bets',
    name: 'bets',
    component: () => import('./components/Middle/ViewBets/Bets.vue'),
    children: [
      {
        path: '',
        name: 'Open',
        component: () => import('./components/Middle/ViewBets/Open.vue')
      },
      {
        path: 'settled',
        name: 'Settled',
        component: () => import('./components/Middle/ViewBets/Settled.vue'),
        meta: { requiresSettledData: true },
        
        
      },
      {
        path: 'jackpots',
        name: 'Jackpots',
        component: () => import('./components/Middle/ViewBets/Jackpots.vue')
      },
      {
        path: 'virtuals',
        name: 'Virtuals',
        component: () => import('./components/Middle/ViewBets/Virtuals.vue')
      }
    ]
  },
  {
    path: '/bets/regular/:id', 
    name: 'SettledDetail',
    component: () => import('./components/Middle/ViewBets/SettledDetail.vue'),
    props: true
  },
  {
    path: '/join-now',
    name: 'JoinNow',
    component: JoinNow
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')