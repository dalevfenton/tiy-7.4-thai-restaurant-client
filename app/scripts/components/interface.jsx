var React = require('react');

var Sidebar = require('./sidebar.jsx');
var OrderDetail = require('./orderdetail.jsx');

var InterfaceComponent = React.createClass({
  getInitialState: function(){
    return {
      orders: this.props.orders,
      curOrder: this.props.orders.at(0)
    }
  },
  showOrder: function(e, model){
    e.preventDefault();
    this.setState({curOrder: model});
    console.log(e);
    console.log('showOrder connected');
  },
  render: function(){
    console.log(this.state.orders);

    return (
      <div className="container">
        <div className="row">
          <Sidebar orders={this.state.orders} showOrder={this.showOrder} />
          <OrderDetail order={this.state.curOrder} />
        </div>
      </div>
    );
  }
});

module.exports = InterfaceComponent;
