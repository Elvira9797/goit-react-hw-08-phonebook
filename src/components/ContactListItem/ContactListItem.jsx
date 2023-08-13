import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { MdClose } from 'react-icons/md';
import { LiaPencilAltSolid } from 'react-icons/lia';
import {
  ButtonStyled,
  ButtonStyledCancel,
  Data,
  DataWrapper,
  IconWrapper,
  Input,
  ListItem,
} from './ContactListItem.styled';

import { Button, Span } from '../ContactForm/ContactForm.styled';
import { ReactComponent as ContactIcon } from '../../images/user.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone.svg';
import Modal from 'components/Modal';
import {
  selectModalIsOpen,
  selectSelectedContact,
} from 'redux/modal/modalSelectors';
import { toggleModal } from 'redux/modal/modalSlice';
import Notiflix from 'notiflix';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const selectedContact = useSelector(selectSelectedContact);
  const isOpen = useSelector(selectModalIsOpen);

  const handleDelete = async () => {
    await dispatch(deleteContact(contact.id));
    Notiflix.Notify.success(`The contact was successfully deleted.`);
  };
  const openModal = () => {
    dispatch(toggleModal(contact));
  };

  const handleCancel = () => {
    dispatch(toggleModal());
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    await dispatch(
      updateContact({
        contactId: selectedContact.id,
        name,
        number,
      })
    );

    dispatch(toggleModal());
    Notiflix.Notify.success(`The contact was successfully update.`);
  };

  return (
    <>
      <ListItem>
        <DataWrapper>
          <Data>
            <ContactIcon />
            {contact.name}
          </Data>
          <Data>
            <PhoneIcon /> {contact.number}
          </Data>
        </DataWrapper>
        <IconWrapper>
          <ButtonStyled onClick={openModal} style={{ color: '#b0b7bd' }}>
            <LiaPencilAltSolid size={24} />
          </ButtonStyled>
          <ButtonStyled onClick={handleDelete}>
            <MdClose size={24} />
          </ButtonStyled>
        </IconWrapper>
      </ListItem>
      {isOpen && (
        <Modal>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              defaultValue={selectedContact.name}
            />
            <Input
              type="text"
              name="number"
              defaultValue={selectedContact.number}
            />
            <Button type="submit" style={{ marginTop: 0 }}>
              Update <Span></Span>
            </Button>
            <ButtonStyledCancel onClick={handleCancel}>
              <MdClose size={24} />
            </ButtonStyledCancel>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ContactListItem;
