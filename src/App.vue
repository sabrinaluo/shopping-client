<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            Shopping Website
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <a v-link="{path: '/product', activeClass: 'active'}"
            >Products</a></li>
          </ul>
        <div class="collapse navbar-collapse">
          <p class="navbar-text navbar-right">Welcome!
            <a href="#" class="navbar-link">{{user.username}}</a>
          </p>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view keep-alive></router-view>
    </div>
  </div>
</template>

<script>
  import Auth from './services/auth';

  export default {
    data() {
      return {
        user: Auth.user
      };
    }
  };
</script>

<style>
  body {
    padding-top: 70px;
  }

  .navbar-fixed-top {
    padding-right: 15px;
  }
</style>
