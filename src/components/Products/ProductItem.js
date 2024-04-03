import React from 'react';
import { Card, Button, Tag } from 'antd';

const { Meta } = Card;

const ProductItem = ({ product, addToCart }) => {
  return (
    <Card
      hoverable
      style={style.card}
      cover={
        <div style={style.imageContainer}>
          <img alt={product.title} src={product.thumbnail} style={style.image} />
        </div>
      }
    >
      <div style={style.contentContainer}>
        <Meta title={product.title} description={
              <div>
              <Tag style={style.tag} color="blue">{product.category}</Tag>
              <p style={style.font}>{`$${product.price}`}</p>
              </div>
          } 
        />
        <Button type="primary" block onClick={() => addToCart(product)} style={{ marginTop: '10px' }}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};


const style = {
  card: {
    margin: '10px',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  imageContainer: {
    height: '160px', // Fixed height for the image container
    overflow: 'hidden', // Hide the overflow to maintain the container size
    display: 'flex', // Use flex to center the image within the container
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  },
  contentContainer: {
    flex: '1', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between' 
  },
  tag: { 
    marginBottom: '10px', 
    borderRadius: '5px' 
  },
  font: { 
    fontWeight: 'bold', 
    fontSize: '16px' 
  }
};



export default ProductItem;
