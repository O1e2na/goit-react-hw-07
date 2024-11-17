import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

function ContactList({ contacts }) {
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.listItem}>
          {contact.name}: {contact.number}
          <button className={styles.buttonDelete} onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
