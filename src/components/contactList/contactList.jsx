import propTypes from 'prop-types';
import React from 'react';

import { BtnDelete } from './contactList.styled';

export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <BtnDelete type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </BtnDelete>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
