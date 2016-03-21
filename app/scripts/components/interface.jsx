var React = require('react');

var Sidebar = require('./sidebar.jsx');

var InterfaceComponent = React.createClass({
  getInitialState: function(){
    return {
      orders: this.props.orders
    }
  },
  showOrder: function(e){
    e.preventDefault();
    console.log(e);
    console.log('showOrder connected');
  },
  render: function(){
    console.log(this.state.orders);
    return (
      <div className="container">
        <div className="row">
          <Sidebar orders={this.state.orders} />
        </div>
      </div>
    );
  }
});

module.exports = InterfaceComponent;
