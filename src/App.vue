<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed"
                  data-toggle="collapse" data-target="#sa-navbar-collapse"
                  aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            Shopping Website
          </a>
        </div>
        <div class="collapse navbar-collapse" id="sa-navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <a v-link="{path: '/products', activeClass: 'active'}"
              >Products</a></li>
          </ul>
          <p class="navbar-text navbar-right">Welcome! {{user.username}}
          </p>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view
        keep-alive
      ></router-view>
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

  a.active {
    background: #e7e7e7;
  }
</style>
