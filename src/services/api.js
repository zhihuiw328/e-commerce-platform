import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the products:', error);
    return null;
  }
};

export const searchProducts = async (searchTerm, searchType) => {
  const url = searchType === 'category'
    ? `https://dummyjson.com/products/category/${searchTerm}`
    : `https://dummyjson.com/products/search?q=${searchTerm}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return { products: [] }; // Return an empty list on error
  }
};