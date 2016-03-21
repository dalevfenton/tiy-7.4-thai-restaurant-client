var Backbone = require('backbone');

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/mtorders',
  model: Order
});

module.exports = {
  Order: Order,
  OrderCollection: OrderCollection
};
