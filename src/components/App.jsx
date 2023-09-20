import { nanoid } from 'nanoid';
import ContactList from './ContsctList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function createContact(body) {
    const newContact = {
      id: nanoid(),
      ...body,
    };
    const isExist = contacts.find(
      el => el.name.toLowerCase() === body.name.toLowerCase()
    );

    if (isExist) {
      alert(`${body.name} is already in contacts.`);
      return;
    } else {
      setContacts(newContact);
    }
  }

  const filterContact = filterQuery => setFilter(filterQuery);

  const handleDelete = id =>
    setContacts(prev => prev.filter(contact => contact.id !== id));

  const getFilterAddContact = () => {
    return contacts.filter(el => el.name.toLowerCase().includes(filter));
  };

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
        <ContactForm createContact={createContact} />

        <h2>Contacts</h2>
        <Filter filterContact={filterContact} />
        <ContactList
          contacts={getFilterAddContact()}
          handleDelete={handleDelete}
        ></ContactList>
      </div>
    </div>
  );
}
