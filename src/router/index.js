import Vue from 'vue';
import Router from 'vue-router';
import VueYoutube from 'vue-youtube';
import homePage from '../pages/homepage.vue';
Vue.use(Router);
Vue.use(VueYoutube);

const routes = [
 {
    path: '/',
    name: 'home',
    title: 'home',
 component: homePage,
 },
  
  
];

export default new Router({
    mode:'history',
    scrollBehavior: function(to,) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior:'smooth'
            }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes,
});
