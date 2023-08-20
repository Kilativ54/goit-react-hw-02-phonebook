import React, { Component } from 'react';

import { Container } from './App.styled';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = contactItem => {
    const { name } = contactItem;
    let checkContact = this.state.contacts.find(
      contact => contact.name === name
    );

    if (checkContact) {
      return alert(`${name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [contactItem, ...prevState.contacts],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return filterContactsList;
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2> Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}
