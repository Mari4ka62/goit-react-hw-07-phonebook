import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/operations';
import { Toaster } from 'react-hot-toast';
import { selectError, selecttIsLoading } from 'store/selectors';

export function Phonebook() {
  const isLoading = useSelector(selecttIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="container">
      <Toaster />
      <h2 className="title">Phonebook</h2>
      <ContactForm />
      <Filter />
      <h2 className="title">Contacts</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops!Something went wrong. Error: {error}</p>}{' '}
      <ContactList />
    </div>
  );
}
