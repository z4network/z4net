import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import App from './App.vue';

import Home from './views/Home.vue';
import Technology from './views/Technology.vue';
import Developers from './views/Developers.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/technology', component: Technology },
  { path: '/developers', component: Developers }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
