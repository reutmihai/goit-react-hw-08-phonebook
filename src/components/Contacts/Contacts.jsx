import React from "react";
import { useState } from "react";

const Contacts = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    if (name === "name") {
      setName(value);
      return;
    }
    if (name === "number") {
      setNumber(value);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <span>Tel:</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default Contacts;
