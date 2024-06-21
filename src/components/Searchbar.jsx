import React from 'react';
import { useEffect, useState } from 'react';


const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
  }, [value]);

  return (
    <>
      <input
        type="text"
       
        placeholder="Search data..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBar;