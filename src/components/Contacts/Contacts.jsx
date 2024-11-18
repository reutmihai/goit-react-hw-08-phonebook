import React from "react";
import { useState } from "react";
import styles from '../Contacts/Contacts.module.css';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/slices/contactsSlice";

const Contacts = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({name, number}));
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles["contact-form"]}>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Tel:</span>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default Contacts;
