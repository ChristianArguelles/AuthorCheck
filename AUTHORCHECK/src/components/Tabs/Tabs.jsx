import React, { useState } from 'react';
import styles from './Tabs.module.css';
import OverviewTab from '../OverviewTab/OverviewTab';
import AnalysisTab from '../AnalysisTab/AnalysisTab';

const Tabs = ({ analysisResult, text }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex border-b mb-4">
        <button
          className={`${styles.tabButton} ${activeTab === 'overview' ? styles.active : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'analysis' ? styles.active : ''}`}
          onClick={() => setActiveTab('analysis')}
        >
          Analysis
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && <OverviewTab text={text} />}
        {activeTab === 'analysis' && <AnalysisTab result={analysisResult} />}
      </div>
    </div>
  );
};

export default Tabs;
