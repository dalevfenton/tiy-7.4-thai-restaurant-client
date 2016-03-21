var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./models/models');
var InterfaceComponent = require('./components/interface.jsx');

var orders = new models.OrderCollection();

orders.fetch().done(function(){
  ReactDOM.render(
    React.createElement(
      InterfaceComponent,
      {
        orders: orders
       }
    ),
    document.getElementById('app')
  );

});
