import React from 'react';
import styles from '../ContactsList/ContactsList.module.css';

const ContactsList = ({contacts, deleteContact}) => {
  return (
    <div>
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} className={styles['contact-item']}> {contact.name} | {contact.number}
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ContactsList;