import VueRouter from 'vue-router';

import GameDevelopment from './pages/GameDevelopment.vue';
import WebDevelopment from './pages/WebDevelopment.vue';


import App from './App.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/gamedevelopment', component: GameDevelopment, },
    { path: '/webdevelopment', component: WebDevelopment, },
];

const router = new VueRouter({
    routes,
});

const $root = new Vue(Object.assign({
    router,
}, App));