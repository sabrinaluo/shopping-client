import Vue from 'vue';

export default{
  getLatest(brandId) {
    brandId = brandId || '';
    var products = Vue.resource('product');
    var params = brandId ? {brand_id: brandId} : {};//eslint-disable-line
    return products.get(params)
      .then(response => {
        products = response.data;
        if (products.length) {
          return Promise.resolve(products);
        }
        return Promise.reject({
          data: {
            message: 'Sorry, no products under this brand'
          }
        });
      }).catch(response => {
        throw new Error(response.data.message);
      });
  },
  getById(id) {
    var product = Vue.resource('product{/id}');
    return product.get({id: id})
      .then(response => {
        console.log(response);
        return response.data;
      }).catch(response => {
        throw new Error(response.data.message);
      });
  }
};
