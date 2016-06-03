import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import WelcomeView from './components/WelcomeView';
import ProductListView from './components/ProductListView';
import ProductView from './components/ProductView';
import NotFoundView from './components/NotFoundView';
import App from './App';

Vue.use(Router);
Vue.use(Resource);
Vue.http.options.root = '/api';

export var router = new Router();

// Named Router http://router.vuejs.org/en/named.html
router.map({
  '/': {
    component: WelcomeView
  },
  '/products': {
    component: ProductListView
  },
  '/product/:productId': {
    name: 'product',
    component: ProductView
  },
  '/404': {
    component: NotFoundView
  }
});

router.redirect({
  '*': '/404'
});

router.start(App, '#app');
