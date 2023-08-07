import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { MdClose } from 'react-icons/md';
import {
  ButtonStyled,
  Data,
  DataWrapper,
  IconWrapper,
  ListItem,
} from './ContactListItem.styled';
import { ReactComponent as ContactIcon } from '../../images/user.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone.svg';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
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
        <ButtonStyled onClick={handleDelete}>
          <MdClose size={24} />
        </ButtonStyled>
      </IconWrapper>
    </ListItem>
  );
};

export default ContactListItem;
