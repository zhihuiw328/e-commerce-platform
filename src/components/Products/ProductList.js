import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import ProductItem from './ProductItem';
import { fetchProducts } from '../../services/api';

const ProductList = ({ addToCart, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      if (data && data.products) {
        setProducts(data.products);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);


  return (
    <Row gutter={[16, 16]} style={style.row}>
      {filteredProducts.map((product) => (
        <Col
          xs={24} // Full width on extra small screens (1 item per row)
          sm={12} // Half width on small screens (2 items per row)
          md={8}  // One third on medium screens (3 items per row)
          lg={6}  // One fourth on large screens (4 items per row)
          xl={6}  // One fifth on extra large screens (4 items per row)
          key={product.id}
          style={style.col}
        >
          <ProductItem product={product} addToCart={addToCart} />
        </Col>
      ))}
    </Row>
  );
};

const style = {
  row: {
    margin: 0
  },
  col: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16
  }
  
}


export default ProductList;
