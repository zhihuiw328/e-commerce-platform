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
    <div style={style.container}>
      <Select defaultValue="name" style={style.select} onChange={setSearchType}>
        <Option value="name">Name</Option>
        <Option value="category">Category</Option>
      </Select>
      <Search
        placeholder={`Search by ${searchType}`}
        onSearch={handleSearch}
        style={style.search}
      />
    </div>
  );
};

const style = {
  container: { 
    display: 'flex', 
    justifyContent: 'center',
     marginBottom: '20px' 
  },
  select: { 
    width: 120, 
    marginRight: '10px' 
  },
  search: { 
    width: 200 
  }
}


export default SearchBar;