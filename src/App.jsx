// src/App.jsx

import ContactForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
