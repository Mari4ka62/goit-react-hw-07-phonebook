import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectContact, selectFilter } from 'store/selectors';
import { deleteContact } from 'store/operations';

export default function ContactList() {
  const contacts = useSelector(selectContact);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const actualContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <ul className={css.listContact}>
      {actualContacts &&
        actualContacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <p className={css.text}>
              {contact.name}: {contact.phone}
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
