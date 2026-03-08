import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import ModuleView from '../views/ModuleView.vue'
import Progress from '../views/Progress.vue'

const router = createRouter({
  history: createWebHistory('/maffeodrinkslearn/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/module/:id',
      name: 'module',
      component: ModuleView
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    }
  ]
})

export default router
