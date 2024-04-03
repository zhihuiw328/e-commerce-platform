import React, { useState } from 'react';
import { Layout, notification, Drawer, Button } from 'antd';
import ProductList from './components/Products/ProductList';
import SearchBar from './components/Search/SearchBar';
import Cart from './components/Cart/Cart';
import {Row, Col } from 'antd';


const { Content } = Layout;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [visible, setVisible] = useState(false); // For Drawer visibility
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        notification.info({
          message: 'Item already in cart',
          description: `${product.title} is already in your shopping cart.`,
        });
        return prevItems;
      }
      notification.success({
        message: 'Item Added to Cart',
        description: `${product.title} has been added to your shopping cart.`,
      });
      return [...prevItems, product];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    notification.success({
      message: 'Item Removed',
      description: 'The item has been removed from your shopping cart.',
    });
  };

  const onSearch = (value, searchType) => {
    setSearchTerm(value);
    setSearchType(searchType);
  };



  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ margin: '16px 0' }}>

          <Row justify="space-between" align="middle">
            <Col>
              <SearchBar onSearch={onSearch} />
            </Col>
            <Col>
              <Button type="primary" onClick={showDrawer}>
                Cart ({cartItems.length})
              </Button>
              <Drawer
                title="Shopping Cart"
                placement="right"
                closable={true}
                onClose={onClose}
                open={visible}
              >
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              </Drawer>
            </Col>
            
          </Row>

          <ProductList addToCart={addToCart} searchTerm={searchTerm} searchType={searchType} />
        </div>
      </Content>
    </Layout>
  );
}


export default App;
