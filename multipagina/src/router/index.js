import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProyectsView from '@/views/ProyectsView.vue'
import ContactView from '@/views/ContactView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/proyectos', name: 'projects', component: ProyectsView },
    { path: '/contacto', name: 'contact', component: ContactView },
    { path: '/proyecto/:id', name: 'ProjectDetailView', component: ProjectDetailView },
  ],
})

export default router
