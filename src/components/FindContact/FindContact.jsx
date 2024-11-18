import React from 'react';
import styles from '../FindContact/FindContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/slices/contactsSlice';

export const FindContact = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.findContact}>
      <input
        type="text"
        name="name"
        required
        value={filter}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
      />
    </div>
  );
}
