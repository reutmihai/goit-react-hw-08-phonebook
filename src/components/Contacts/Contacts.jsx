import React, { useState } from "react";
import styles from "../Contacts/Contacts.module.css";

const Contacts = ({ onAddContact, error }) => {
  // onAddContact este primită ca prop
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddContact) {
      onAddContact(name, number); // apelarea funcției din props
    }
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["contact-form"]}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Contacts;
