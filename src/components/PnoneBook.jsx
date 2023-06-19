import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export function Phonebook() {
  return (
    <div className="container">
      <h2 className="title">Phonebook</h2>
      <ContactForm />
      <Filter />
      <h2 className="title">Contacts</h2>
      <ContactList />
    </div>
  );
}
