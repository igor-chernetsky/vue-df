import Vue from 'vue';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import Main from '@/pages/Main';
import Maps from '@/pages/Maps';
import MapManager from '@/pages/MapManager';
import('vuetify/dist/vuetify.min.css');

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/mapmanager',
      name: 'Map Manager',
      component: MapManager
    }
  ]
});
