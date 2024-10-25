import { useState } from 'react';
import Section from './components/Section/Section';
import Contacts from './components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import './App.css';
import ContactsList from './components/ContactsList/ContactsList';


function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  return (
    <>
      <Section title="PhoneBookApp">
        <Contacts addContact={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <ContactsList contacts={contacts} deleteContact={handleDeleteContact}/>
      </Section>
    </>
  );
}

export default App
