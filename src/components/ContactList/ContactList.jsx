import ContactListItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const formatedFiltered = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formatedFiltered)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </List>
  );
};

export default ContactList;
