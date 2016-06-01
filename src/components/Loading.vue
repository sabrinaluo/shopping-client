<template>
  <span class="sa-loading"
    v-show="isLoading">
    <span class="lead sa-loading-text">
      <i class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></i>
      loading...</span>
  </span>
</template>

<script>
export default {
  name: 'loading',
  props: {
    isLoading: false
  }
};
</script>
<style>
  .sa-loading {
    padding-left: 20px;
  }

  .glyphicon-refresh-animate {
    animation: spin .7s infinite linear;
    -webkit-animation: spin2 .7s infinite linear;
  }

  @-webkit-keyframes spin2 {
    from { -webkit-transform: rotate(0deg);}
    to { -webkit-transform: rotate(360deg);}
  }

  @keyframes spin {
    from { transform: scale(1) rotate(0deg);}
    to { transform: scale(1) rotate(360deg);}
  }
</style>
