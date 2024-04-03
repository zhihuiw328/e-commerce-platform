import React from 'react';
import { List, Button } from 'antd';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <List
      size="large"
      header={<div>Your Shopping Cart</div>}
      bordered
      dataSource={cartItems}
      renderItem={item => (
        <List.Item
          actions={[<Button onClick={() => removeFromCart(item.id)}>Remove</Button>]}
        >
          {item.title} - ${item.price}
        </List.Item>
      )}
    />
  );
};

export default Cart;
