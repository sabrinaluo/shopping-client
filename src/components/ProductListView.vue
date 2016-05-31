<template>
  <div class="row">
    <div class="col-xs-12">
      <h1>Latest Product</h1>
      <div class="alert alert-warning" role="alert"
           v-show="errorMessage">
        {{errorMessage}}
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <table class="table">
        <tr>
          <th>Product Name</th>
          <th>Brand Name</th>
          <th>Price</th>
          <th>Latest Comment</th>
          <th></th>
        </tr>
        <tr v-for="product in products">
          <td>{{product.product_name}}</td>
          <td>{{product.brand_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.comment}}</td>
          <td><a class="btn btn-primary btn-xs" href="/">Add Review</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Product from './../services/product';

  export default {
    data() {
      return {
        errorMessage: '',
        products: []
      };
    },
    ready() {
      var brandId = this.$route.query.brand_id;
      Product.getLatest(brandId).then(res => {
        this.products = this.products.concat(res.data);
      }).catch(e => {
        this.errorMessage = 'Sorry, no products under this brand';
        console.log(e);
      });
    },
    methods: {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
