import React, { useState, useEffect } from 'react';

const Order = () => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    fetch('https://shrouded-crag-66444.herokuapp.com/orders')
    .then(res => res.json())
    .then(data => setOrders(data))
  }, [])
  return (
    <div className="text-center">
      <h1>This is {orders.length} Order</h1>
{
  orders.map(order =><li>Name: {order.name} Order Time: {order.orderTime}</li>)
}
    </div>
  );
};

export default Order;