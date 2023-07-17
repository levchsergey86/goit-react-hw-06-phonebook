import React from 'react';
import styled from '../ContactListItem/ContactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => {
  return (
    <li className={styled.listItem} key={contact.id}>
      {contact.name} - {contact.number}{' '}
      <button
        className={styled.deleteButton}
        onClick={() => deleteContact(contact.id)}
      >
        Delete Contact
      </button>
    </li>
  );
};

export default ContactListItem;
