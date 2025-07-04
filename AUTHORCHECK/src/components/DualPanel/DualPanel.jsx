import React from 'react';
import styles from './DualPanel.module.css';

const DualPanel = ({ leftPanel, rightPanel }) => {
  return (
    <section className="w-full py-8 px-4 bg-gray-50 min-h-screen">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ${styles.fadeIn}`}>
        {/* Left Side: Text input or uploaded content */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          {leftPanel}
        </div>

        {/* Right Side: Analysis result */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          {rightPanel}
        </div>
      </div>
    </section>
  );
};

export default DualPanel;
