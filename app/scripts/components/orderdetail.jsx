var React = require('react');

var OrderOption = React.createClass({
  render: function(){
    return (
      <div className="item-option">
        {this.props.option}
      </div>
    );
  }
});

var OrderItem = React.createClass({
  render: function(){
    var model = this.props.model;
    var options = '';
    var optKey = 0;
    console.log(model);
    if(model.options){
      optKey += 1;
      options = model.options.map(function(option){
        return ( <OrderOption option={option} key={optKey} />);
      });
    }
    var suffix = '';
    if(model.numOrdered != 1){
      suffix = 's'
    }
    return (
      <li className="order-info">
        <div className="item-title">{model.title}</div>
        <div className="item-options">
          {options}
        </div>
        <div className="item-numOrdered">{model.numOrdered} order{suffix} </div>
      </li>
    );
  }
});

var OrderDetail = React.createClass({
  render: function(){
    var customer = this.props.order.get('customer');
    var orderObj = this.props.order.get('order');
    var orderKey = 0;
    var orderItems = orderObj.map(function(model){
      orderKey += 1;
      return ( <OrderItem model={model} key={ orderKey }/> );
    })
    return (
      <div id="order-detail">
        <div id="order-customer-info">
          <div className="customer-name">Name: {customer.firstname} {customer.lastname}</div>
          <div className="customer-phone">Contact Number: {customer.phone}</div>
          <div className="customer-address">Address: {customer.addressln1} {customer.city} {customer.st} {customer.zip}</div>
          <div className="customer-email">Email: {customer.email}</div>
        </div>
        <div id="order-order-info">
          <ul>
            {orderItems}
          </ul>
        </div>
        <div id="order-status">
          <form>
            <div className="preparing">
              <input type="checkbox" name="preparing" value="" />
            </div>
            <div className="prepared">
              <input type="checkbox" name="prepared" value="" />
            </div>
            <div className="delivering">
              <input type="checkbox" name="delivering" value="" />
            </div>
            <div className="delivered">
              <input type="checkbox" name="delivered" value="" />
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = OrderDetail;
