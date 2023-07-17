import React from 'react';
import styled from '../FilterContacts/FilterContacts.module.css';

const FilterContacts = ({ handleFilterChange }) => {
  return (
    <div>
      <h4>Find contact</h4>
      <input
        type="text"
        name="filter"
        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilterChange}
        className={styled.input}
      />
    </div>
  );
};

export default FilterContacts;
