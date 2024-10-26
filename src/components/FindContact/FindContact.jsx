import React from 'react';
import styles from '../FindContact/FindContact.module.css';

export const FindContact = ({  filter, onChangeFilter }) => {

  return (
    <div className={styles.findContact}>
      <input
        type="text"
        name="name"
        required
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
}
