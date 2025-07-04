import React from 'react';
import styles from './WordCount.module.css';

const WordCount = ({ label, value }) => {
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default WordCount;
