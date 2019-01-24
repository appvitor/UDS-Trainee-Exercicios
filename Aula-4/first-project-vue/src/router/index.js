import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import VitorPiresCorrea from '@/components/VitorPiresCorrea';
import Contador from '@/components/Contador';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/sobre',
      name: 'VitorPiresCorrea',
      component: VitorPiresCorrea,
    },
    {
      path: '/contador',
      name: 'Contador',
      component: Contador,
    },
  ],
});
