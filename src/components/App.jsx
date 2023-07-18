import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import FilterContacts from './FilterContacts/FilterContacts';
import ContactList from './ContactList/ContactList';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';
import styled from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      if (parsedContacts.length > 0 && contacts.length === 0) { 
        dispatch(addContact(parsedContacts));
      }
    }
  }, [dispatch, contacts]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleAddContact = (name, number) => {
    const isContactExists = contacts.some(
      contact =>
        contact.name &&
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number === number
    );

    if (isContactExists) {
      alert('Contact with the same name or number already exists.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styled.container}>
      <h1>PHONE BOOK</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts:</h2>
      <FilterContacts handleFilterChange={handleFilterChange} />
      <ContactList
        filteredContacts={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
