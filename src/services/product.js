import Vue from 'vue';

export default{
  getLatest(brandId) {
    brandId = brandId || '';
    var api = 'https://shopping-sab.herokuapp.com/api/product?brand_id=' + brandId;
    return Vue.http.get(api);
  }
};
