import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loader}></div>
      <p className={styles.loadingText}>Analyzing, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
