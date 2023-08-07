import {
  ContactTitle,
  Message,
  Phonebook,
  Title,
  Wrapper,
} from './ContactsPage.styled';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Phonebook>
      <Title>Your Contact Book</Title>
      <ContactForm />

      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message>You don't have any contacts</Message>
      )}
    </Phonebook>
  );
};

export default ContactsPage;
