import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContsctList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createContact = body => {
    const isExist = this.state.contacts.find(
      el => el.name.toLowerCase() === body.name.toLowerCase()
    );
    if (isExist) {
      alert(`${body.name} is already in contacts.`);
      return;
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, { id: nanoid(), ...body }],
    }));
  };

  filterContact = filterQuery => {
    this.setState({
      filter: filterQuery,
    });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilterAddContact = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div>
        <div
          style={{
            margin: 15,
            padding: '12px 16px',
            borderRadius: 4,
            backgroundColor: 'gray',
            color: 'white',
          }}
        >
          <h1>Phonebook</h1>
          <ContactForm createContact={this.createContact} />

          <h2>Contacts</h2>
          <Filter filterContact={this.filterContact} />
          <ContactList
            contacts={this.getFilterAddContact()}
            handleDelete={this.handleDelete}
          ></ContactList>
        </div>
      </div>
    );
  }
}
