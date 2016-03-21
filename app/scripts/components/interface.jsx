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
  componentWillMount: function(){
    this.callback = (function(){
      console.log('forceUpdate called');
      this.forceUpdate();
    }).bind(this);
    this.state.orders.on('add', this.callback);
    this.state.orders.on('update', this.callback);
  },
  updateStatus: function(e, order){
    var updated = this.state.orders.add( order, { merge: true } );
    updated.save();
  },
  removeOrder: function(e, order){
    this.state.orders.get( order ).destroy();
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
          <OrderDetail
            order={this.state.curOrder}
            removeOrder={this.removeOrder}
            updateStatus={this.updateStatus} />
        </div>
      </div>
    );
  }
});

module.exports = InterfaceComponent;
