import { createMemoryHistory, createRouter } from 'vue-router';
import Component from '../components/Component.vue';
import WebComponent from '../components/WebComponent.vue';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Component,
    },
    {
      path: '/components',
      name: 'components',
      component: Component,
    },
    {
      path: '/webcomponents',
      name: 'webcomponents',
      component: WebComponent,
    },
  ],
});

export default router;
