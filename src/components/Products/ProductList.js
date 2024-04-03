import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import ProductItem from './ProductItem';
import { fetchProducts, searchProducts } from '../../services/api';

const ProductList = ({ addToCart, searchTerm, searchType }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      // Call the search API when there is a searchTerm
      const fetchSearchProducts = async () => {
        const data = await searchProducts(searchTerm, searchType);
        // console.log('have search term');
        if (data && data.products) {
          setProducts(data.products);
        }
      };

      fetchSearchProducts();
    } else {
      // Fetch all products if there is no search term
      const getProducts = async () => {
        const data = await fetchProducts();
        // console.log('no search term');
        if (data && data.products) {
          setProducts(data.products);
        }
      };

      getProducts();
    }
  }, [searchTerm, searchType]);


  return (
    <Row gutter={[16, 16]} style={style.row}>
      {products.map((product) => (
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
