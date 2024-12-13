import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import Introduction from '../views/Introduction.vue';
import Milestones from '../views/Milestones.vue';
import MilestoneSlide from '../views/MilestoneSlide.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  { 
    path: '/intro',
    name: 'Intro',
    component: Introduction 
  },
  { 
    path: '/milestones', 
    name: 'Milestones', 
    component: Milestones 
  },
  { 
    path: '/milestone/:id', 
    name: 'MilestoneSlide', 
    component: MilestoneSlide },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue') // Lazy-loaded 404 page
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router