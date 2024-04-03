import React from 'react';
import { Input } from 'antd';

const SearchBar = ({ onSearch }) => {
  return (
    <Input.Search
      placeholder="Search for products"
      onSearch={onSearch}
      style={{ width: 200, marginBottom: '1rem' }}
      enterButton
    />
  );
};

export default SearchBar;