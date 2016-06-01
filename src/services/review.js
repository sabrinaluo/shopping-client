import Vue from 'vue';

export default{
  save(data) {
    var review = Vue.resource('review');
    return review.save(data)
      .then(response => {
        return response.data;
      }).catch(response => {
        throw new Error(response.data.message);
      });
  },
  getById(id) {
    var product = Vue.resource('product{/id}');
    return product.get({id: id})
      .then(response => {
        return response.data;
      }).catch(response => {
        throw new Error(response.data.message);
      });
  }
};
