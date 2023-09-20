import { Component } from 'react';
import css from './ContactForm.module.css';
const DEFAULT_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = DEFAULT_STATE;
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact(this.state);
    this.setState(DEFAULT_STATE);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor="exampleInputName"></label>
        <input
          type="text"
          className={css.input}
          id="exampleInputName"
          name="name"
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
        />
        <label htmlFor="exampleInputNumder"></label>
        <input
          type="tel"
          className={css.input}
          id="exampleInputNumder"
          name="number"
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
        />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}
