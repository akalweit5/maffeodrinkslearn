import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'

const router = createRouter({
  history: createWebHistory('/maffeodrinkslearn/'),
  routes: [{ path: '/', component: Home }],
})

export default router
