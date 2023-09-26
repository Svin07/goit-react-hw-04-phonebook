import css from './ContactForm.module.css';
import { useState } from 'react';

export default function ContactForm({ createContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const defaultValue = '';

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact({ name, number });
    setName(defaultValue);
    setNumber(defaultValue);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="exampleInputName"></label>
      <input
        type="text"
        className={css.input}
        id="exampleInputName"
        name="name"
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
      />
      <label htmlFor="exampleInputNumder"></label>
      <input
        type="tel"
        className={css.input}
        id="exampleInputNumder"
        name="number"
        onChange={handleChangeNumber}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
      />

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}
