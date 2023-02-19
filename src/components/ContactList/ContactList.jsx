import PropTypes from 'prop-types';
import { DeleteButton, ContactItem } from './ContactList.styled';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return filteredContacts.map(({ id, name, number }) => (
    <ContactItem key={id}>
      {name}: {number}
      <DeleteButton
        id={id}
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </DeleteButton>
    </ContactItem>
  ));
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;