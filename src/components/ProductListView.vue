<template>
  <h1>Latest Product
    <span v-if="currentBrandId">(Brand ID: {{currentBrandId}})</span>
    <span v-if="!currentBrandId">(All Brand)</span>
    <loading :is-loading="isLoading"></loading>
  </h1>
  <error-message :msg="errorMessage"></error-message>
  <div class="row">
    <div class="col-md-4 col-sm-6">
      <div class="input-group sa-filter">
        <input type="text" class="form-control" placeholder="Search by Brand ID"
               v-model="filterBrandId">
        <span class="input-group-btn">
          <button class="btn btn-success" type="button"
                  @click="filterBrand(filterBrandId)">Seacrh</button>
          <button class="btn btn-default" type="button"
                  v-if="currentBrandId"
                  @click="clear()">Clear</button>
        </span>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <table class="table" v-if="products.length">
        <tr>
          <th>Product Name</th>
          <th>Brand Name</th>
          <th class="sa-description">Description</th>
          <th class="sa-review">Latest Review</th>
          <th>Action</th>
        </tr>
        <tr v-for="product in products">
          <td>{{product.name}}</td>
          <td>{{product.brand_name}}</td>
          <td>{{product.description}}</td>
          <td class="sa-review">
            <p>{{product.comment}}</p>
            <p class="sa-review-user">Rating: {{product.rating}}, By {{product.username}}</p>
          </td>
          <td>
            <a class="btn btn-primary btn-xs"
               v-link="{name: 'product', params: {productId: product.id}}"
          >Add Review</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Product from './../services/product';
  import Loading from './Loading';
  import ErrorMessage from './ErrorMessage';

  export default {
    data() {
      return {
        isLoading: true,
        errorMessage: '',
        products: [],
        filterBrandId: '',
        currentBrandId: ''
      };
    },
    components: {
      Loading,
      ErrorMessage
    },
    route: {
      activate() {
        var brandId = this.$route.query.brand_id;
        this.filterBrand(brandId);
      }
    },
    methods: {
      filterBrand(brandId) {
        this.isLoading = true;
        this.errorMessage = '';
        Product.getLatest(brandId).then(data => {
          this.products = data;
        }).catch(e => {
          this.products = [];
          this.errorMessage = e.message;
        }).then(() => {
          this.currentBrandId = brandId;
          this.isLoading = false;
        });
      },
      clear() {
        this.currentBrandId = '';
        this.filterBrand();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sa-filter {
    padding-bottom: 10px;
  }
  .sa-description{
    max-width: 200px;
  }
  .sa-review{
    max-width:200px;
  }
  .sa-review-user{
    font-size:10px;
  }
</style>
