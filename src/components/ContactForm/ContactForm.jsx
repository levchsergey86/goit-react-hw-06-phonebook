import React, { useState } from 'react';
import styled from '../ContactForm/ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) {
      alert('Please enter name and number');
      return;
    }
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Name:</h3>
          <input
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            className={styled.input}
          />
        </div>
        <div>
          <h3>Number:</h3>
          <input
            type="text"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            className={styled.input}
          />
          <button className={styled.AddContactButton} type="submit">
            {' '}
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
