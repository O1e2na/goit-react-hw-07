import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const number = e.target.number.value.trim();
    if (name && number) {
      dispatch(addContact({ id: Date.now().toString(), name, number }));
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} type="text" name="name" placeholder="Name" required />
      <input className={styles.input} type="text" name="number" placeholder="Phone Number" required />
      <button className={styles.button} type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
