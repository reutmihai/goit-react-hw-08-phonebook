import { useState } from 'react';
import Section from './components/Section/Section';
import Contacts from './components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList/ContactsList';
import { FindContact } from './components/FindContact/FindContact';
import './App.css';
import { useSelector } from 'react-redux';


function App() {
  const contacts = useSelector((state) => state.contacts);

  return (
    <>
      <Section title="PhoneBookApp">
        <Contacts/>
      </Section>
        <Section title="Find contact by name" />
        <FindContact />
      <Section title="Contacts">
        {contacts.length === 0 ? (
          <p>There is no contact yet.</p>
        ) : (
          <ContactsList
          />
        )}
      </Section>
    </>
  );
}

export default App
