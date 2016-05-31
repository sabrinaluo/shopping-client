import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import ProductListView from './components/ProductListView';
import ReviewView from './components/ReviewView';
import NotFoundView from './components/NotFoundView';
import App from './App';

Vue.use(Router);
Vue.use(Resource);

export var router = new Router();

router.map({
  '/product': {
    component: ProductListView
  },
  '/review': {
    component: ReviewView
  },
  '/404': {
    component: NotFoundView
  }
});

router.redirect({
  '*': '/404'
});

router.start(App, '#app');
