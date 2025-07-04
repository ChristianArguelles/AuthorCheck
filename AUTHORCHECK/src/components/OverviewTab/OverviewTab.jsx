import React from 'react';
import styles from './OverviewTab.module.css';
import WordCount from '../WordCount/WordCount';

const OverviewTab = ({ text }) => {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;
  const readTime = Math.ceil(wordCount / 200); // Assuming 200 wpm

  return (
    <div className={styles.container}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <WordCount label="Words" value={wordCount} />
        <WordCount label="Characters" value={charCount} />
        <WordCount label="Read Time (min)" value={readTime} />
      </div>

      <div className="bg-white p-4 rounded-xl shadow border">
        <h3 className="text-md font-semibold text-gray-700 mb-2">Preview</h3>
        <p className="text-sm text-gray-600 whitespace-pre-wrap max-h-48 overflow-y-auto">
          {text ? text : <span className="italic text-gray-400">No content provided.</span>}
        </p>
      </div>
    </div>
  );
};

export default OverviewTab;
