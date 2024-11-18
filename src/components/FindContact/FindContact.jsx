import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/contactsSlice";
import styles from '../FindContact/FindContact.module.css'

const FindContact = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value)); 
  };

  return (
    <div className={styles.findContact}>
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default FindContact;
