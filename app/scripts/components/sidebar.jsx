var React = require('react');

var SidebarOrder = React.createClass({
  render: function(){
    return (
      <li onClick={this.props.showOrder}>Order #{this.props.model.get('_id')}</li>
    );
  }
});

var Sidebar = React.createClass({
  render: function(){
    var orders = this.props.orders.map(function(model){
      return ( <SidebarOrder model={model} key={model.cid} /> );
    });
    return (
      <div id="sidebar">
        <ul>
          {orders}
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;
