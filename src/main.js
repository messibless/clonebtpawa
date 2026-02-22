import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

// Import components
const SectionGrow6 = () => import('./components/Middle/grow-6/SectionGrow6.vue')

// IMPORTANT: Import AuthTabs and Forms
import AuthTabs from './Auth/AuthTabs.vue'
import LoginForm from './Login.vue'    // This is now just the form
import RegisterForm from './Join.vue'  // This is now just the form

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
  
  // ===== UPDATED AUTH ROUTES =====
  // Login route - uses AuthTabs as wrapper, LoginForm as child
  {
    path: '/login',
    component: AuthTabs,     // This has the tabs
    children: [
      {
        path: '',            // Empty path means /login shows this
        component: LoginForm // This is just the form
      }
    ]
  },
  
  // Join Now route - uses AuthTabs as wrapper, RegisterForm as child
  {
    path: '/join-now',
    component: AuthTabs,     // This has the tabs
    children: [
      {
        path: '',            // Empty path means /join-now shows this
        component: RegisterForm // This is just the form
      }
    ]
  }
  // ==============================
]

const router = createRouter({
  history: createWebHistory('/project2/'),  // 👈 TUONGEZE HII! Base path imeongezwa
  routes,
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')