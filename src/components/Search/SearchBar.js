import React, { useState } from 'react';
import { Input, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;


const SearchBar = ({ onSearch }) => {

  const [searchType, setSearchType] = useState('name');

  const handleSearch = (value) => {
    onSearch(value, searchType);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <Select defaultValue="name" style={{ width: 120, marginRight: '10px' }} onChange={setSearchType}>
        <Option value="name">Name</Option>
        <Option value="category">Category</Option>
      </Select>
      <Search
        placeholder={`Search by ${searchType}`}
        onSearch={handleSearch}
        style={{ width: 200 }}
      />
    </div>
  );

  // return (
  //   <Input.Search
  //     placeholder="Search for products"
  //     onSearch={onSearch}
  //     style={{ width: 200, marginBottom: '1rem' }}
  //     enterButton
  //   />
  // );
};

const style = {
  
}


export default SearchBar;