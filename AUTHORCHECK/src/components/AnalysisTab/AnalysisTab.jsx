import React from 'react';
import DonutChart from '../../charts/DonutChart';
import styles from './AnalysisTab.module.css';

const AnalysisTab = ({ result }) => {
  if (!result) {
    return <p className="text-gray-500">No analysis yet.</p>;
  }

  const { ai_probability, human_probability, sentiment, sentiment_score, perplexity, burstiness } = result;

  return (
    <div className={`space-y-6 ${styles.fadeIn}`}>
      <h2 className="text-2xl font-semibold text-gray-800">Analysis Result</h2>

      {/* Donut Chart */}
      <DonutChart aiScore={ai_probability} humanScore={human_probability} />

      {/* Sentiment */}
      <div>
        <h3 className="text-lg font-medium text-gray-700">Sentiment</h3>
        <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden mt-2">
          <div
            className="bg-green-500 h-full text-xs text-white text-center"
            style={{ width: `${sentiment_score * 100}%` }}
          >
            {sentiment} ({Math.round(sentiment_score * 100)}%)
          </div>
        </div>
      </div>

      {/* Linguistic Features */}
      <div className="text-sm text-gray-700">
        <p><strong>Perplexity:</strong> {perplexity}</p>
        <p><strong>Burstiness:</strong> {burstiness}</p>
      </div>
    </div>
  );
};

export default AnalysisTab;
