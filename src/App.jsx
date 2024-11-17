import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsSlice';
import ContactForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.module.css';

function App() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters.name);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default App;
