import React, { useState } from 'react';
const Filter = ({ saveFilter }) => {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveFilter(value);
      }}
    >
      <input
       
        onChange={event => {
          setValue(event.target.value);
        }}
        value={value}
      ></input>
    </form>
  );
};
export default Filter;