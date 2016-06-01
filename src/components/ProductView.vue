<template>
  <h1>Product Detail <loading :is-loading="isLoading"></loading></h1>
  <error-message :msg="errorMessage"></error-message>
  <div class="row" v-if="product">
    <div class="col-xs-12">
      <div class="panel panel-default" v-if="product">
        <div class="panel-body">
          <dl class="dl-horizontal">
            <dt>Product Name</dt>
            <dd>{{product.name}}</dd>
            <dt>Description</dt>
            <dd>{{product.description}}</dd>
            <dt>Price</dt>
            <dd>{{product.price}}</dd>
            <dt>Availability Status</dt>
            <dd>{{product.availability_status}}</dd>
          </dl>
          <hr>
          <form class="form-horizontal"
                v-on:submit.prevent="onSubmit">
            <div class="form-group">
              <label for="rating" class="col-sm-2 control-label">Rating</label>
              <div class="col-sm-10">
                <select class="form-control" id="rating" v-model="rating">
                  <option v-for="n in 11">{{n}}</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="email" v-model="email">
              </div>
            </div>
            <div class="form-group">
              <label for="comment" class="col-sm-2 control-label">Comment</label>
              <div class="col-sm-10">
                <textarea class="form-control" rows="5" id="comment"
                v-model="comment"></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary pull-right">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Auth from './../services/auth';
  import Product from './../services/product';
  import Review from './../services/review';
  import Loading from './Loading';
  import ErrorMessage from './ErrorMessage';

  export default {
    data() {
      return {
        email: '',
        rating: 0,
        comment: '',
        isLoading: true,
        errorMessage: '',
        product: null
      };
    },
    components: {
      Loading,
      ErrorMessage
    },
    methods: {
      onSubmit() {
        var payload = {
          user_id: Auth.user.userId, //eslint-disable-line
          product_id: this.product.id, //eslint-disable-line
          rating: Number(this.rating),
          comment: this.comment,
          email: this.email
        };
        Review.save(payload)
          .then(data => {
            console.log(data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    route: {
      activate() {
        this.isLoading = true;
        this.product = null;
        var productId = this.$route.params.productId;
        Product.getById(productId).then(data => {
          this.product = data;
        }).catch(e => {
          this.errorMessage = e.message;
        }).then(() => {
          this.isLoading = false;
        });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
