import { useEffect, useState } from 'react';
import Section from './components/Section/Section';
import Contacts from './components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList/ContactsList';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, fetchContacts } from './redux/slices/contactsSlice';
import FindContact from './components/FindContact/FindContact';


function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

 return (
   <>
     <Section title="PhoneBookApp">
       <Contacts onAddContact={handleAddContact} error={error} />
     </Section>
     <Section title="Find contact by name">
       <FindContact />
     </Section>
     <Section title="Contacts">
       {isLoading && <p>Loading...</p>}
       {items.length === 0 && !isLoading ? (
         <p>No contacts available.</p>
       ) : (
         <ContactsList contacts={items} onDeleteContact={handleDelete} />
       )}
     </Section>
   </>
 );
}

export default App
