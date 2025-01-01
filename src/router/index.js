import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use import.meta.env.BASE_URL
  routes,
  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      
      return savedPosition;
    }
    if (to.hash) {
     
      const element = document.querySelector(to.hash);
      if (element) {
        return {
          el: to.hash,
          behavior: 'smooth', // Smooth scrolling
        };
      }
    
      console.warn(`Element with id '${to.hash.substring(1)}' not found.`);
    }
   
    return { top: 0 };
  },
  
});

export default router;
