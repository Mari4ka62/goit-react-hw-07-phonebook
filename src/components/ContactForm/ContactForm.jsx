import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/operations';
import { selectContact } from 'store/selectors';
import { toast } from 'react-hot-toast';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);

  const submitContact = e => {
    e.preventDefault();

    const duplicatedContact = contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );

    if (duplicatedContact) {
      return toast.error(`${duplicatedContact.name} is already in contacts`);
    }

    const newContact = {
      name: e.target.elements.name.value,
      phone: e.target.elements.number.value,
    };

    dispatch(addContact(newContact));

    e.target.reset();
  };

  return (
    <form onSubmit={submitContact} className={css.form}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input type="text" name="name" required className={css.inputForm} />
      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input type="tel" name="number" required className={css.inputForm} />
      <button type="submit" className={css.addButton}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.number,
  onChange: PropTypes.func,
};
