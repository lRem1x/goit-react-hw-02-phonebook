import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, InputLabel, InputField, AddButton } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = INITIAL_STATE;

  nameInputId = nanoid();
  numberInputId = nanoid();

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleSubmit(this.state);

    this.resetForm();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputLabel htmlFor={this.nameInputId}>Name</InputLabel>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={this.nameInputId}
          placeholder="Contact name"
          required
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.name}
        />

        <InputLabel htmlFor={this.numberInputId}>Number</InputLabel>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={this.numberInputId}
          placeholder="Phone number"
          required
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.number}
        />
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};