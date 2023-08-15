import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

import {Container} from "./App.styled";
import {ContactForm} from "./contactForm/ContactForm";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  }

  handleSubmit = e =>{
const id = nanoid();
const name = e.name;
const number = e.number;
const contactsList = [...this.state.contacts];
if(contactsList.findIndex(contact=> name === contact.name) !== -1){
  alert(`${name} is already in contacts.`);
}else{
  contactsList.push({id, name, number});
  
}
this.setState({contacts : contactsList});
  };

  render()
{  return (
   <Container>
    <h1>Phonebook</h1>
    <ContactForm/>
   </Container>
  );}
};
