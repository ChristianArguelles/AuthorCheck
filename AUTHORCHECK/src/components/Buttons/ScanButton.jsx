import React, { useState } from 'react';
import styles from './Buttons.module.css';

const ScanButton = ({ text, onAnalyze }) => {
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!text.trim()) {
      alert('Please enter or upload text before scanning.');
      return;
    }

    setLoading(true);
    try {
      // Send to backend
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error('Server error');

      const result = await response.json();
      onAnalyze(result); // Pass result to parent
    } catch (error) {
      console.error(error);
      alert('Failed to analyze text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleScan}
      className={`${styles.scanButton} bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition duration-300`}
      disabled={loading}
    >
      {loading ? 'Scanning...' : 'Scan Text'}
    </button>
  );
};

export default ScanButton;
