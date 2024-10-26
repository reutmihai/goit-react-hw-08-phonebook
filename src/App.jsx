import { useState } from 'react';
import Section from './components/Section/Section';
import Contacts from './components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList/ContactsList';
import { FindContact } from './components/FindContact/FindContact';
import './App.css';


function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = ((name, number) => {
    const allContacts = contacts.map(contact => contact.name.toLowerCase());

    if(allContacts.includes(name.toLowerCase())) { 
      alert('Acest contact exista deja!');
      return;
    }; 

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    setContacts((prevState) => [...prevState, newContact]);
  })

  const handleDeleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFindName = (e) => {
    setFilter(e.target.value);
    console.log(filter);
  }

  return (
    <>
      <Section title="PhoneBookApp">
        <Contacts addContact={handleAddContact} />
      </Section>
        <Section title="Find contact by name" />
        <FindContact filter={filter} onChangeFilter={handleFindName} />
      <Section title="Contacts">
        {contacts.length === 0 ? (
          <p>There is no contact yet.</p>
        ) : (
          <ContactsList
            contacts={filtredContacts}
            deleteContact={handleDeleteContact}
          />
        )}
      </Section>
    </>
  );
}

export default App
