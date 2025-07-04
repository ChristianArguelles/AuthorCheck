import React from 'react';
import UploadButton from '../Buttons/UploadButton';
import ScanButton from '../Buttons/ScanButton';

const TextInputPanel = ({ text, setText, onAnalyze, setLoading }) => {
  const handleTextChange = (e) => setText(e.target.value);

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Enter or Paste Text</h2>

      <textarea
        className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Paste your text here or upload a file..."
        value={text}
        onChange={handleTextChange}
      />

      {/* Buttons Row */}
      <div className="flex justify-between items-center mt-4 flex-wrap gap-3">
        <div className="flex gap-2">
          <UploadButton onFileRead={setText} />
          <ScanButton
            text={text}
            onAnalyze={onAnalyze}
            setLoading={setLoading}
          />
        </div>

        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>

      <div className="mt-2 text-sm text-gray-500">{text.length} characters</div>
    </div>
  );
};

export default TextInputPanel;
