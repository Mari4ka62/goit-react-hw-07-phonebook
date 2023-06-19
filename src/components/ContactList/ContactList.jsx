import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactSlice';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const actualContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <ul className={css.listContact}>
      {actualContacts.map(contact => (
        <li key={contact.id} className={css.listItem}>
          <p className={css.text}>
            {contact.name}: {contact.number}
          </p>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
            className={css.buttonDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
