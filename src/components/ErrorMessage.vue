<template>
  <div class="row"
       v-show="msg">
    <div class="col-xs-12">
      <div class="alert alert-warning" role="alert">
        {{msg}} <span class="sa-error-close" @click="close()">X</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'error-message',
    props: {
      msg: ''
    },
    methods: {
      close() {
        this.msg = '';
      }
    }
  };
</script>

<style>
  .sa-error-close{
    float: right;
    color: #ececec;
  }
  .sa-error-close:hover{
    cursor: pointer;
  }
</style>
