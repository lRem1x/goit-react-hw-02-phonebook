import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import { List } from './ContactList/ContactList.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkIfContactExists = queue => {
    const { contacts } = this.state;

    return contacts.some(contact => contact.name === queue);
  };

  handleSubmit = ({ id, name, number }) => {
    const alreadyExists = this.checkIfContactExists(name);

    if (alreadyExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    id = nanoid();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id, name, number }],
    }));
  };

  handleFilter = queue => {
    queue ? this.setState({ filter: queue }) : this.setState({ filter: '' });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return filteredContacts;
  };

  deleteFromContacts = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter filterQueue={this.handleFilter}></Filter>
          <List>
            <ContactList
              filteredContacts={this.showFilteredContacts()}
              onDeleteContact={this.deleteFromContacts}
            />
          </List>
        </Section>
      </>
    );
  }
}
