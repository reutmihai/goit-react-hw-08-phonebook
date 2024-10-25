import React from 'react';

const ContactsList = ({contacts, deleteContact}) => {
  return (
    <div>
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}> {contact.name} | {contact.number}
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ContactsList;