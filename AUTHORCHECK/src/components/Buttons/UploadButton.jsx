import React from 'react';
import mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist';
import styles from './Buttons.module.css';

// Setup PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const UploadButton = ({ onFileRead }) => {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const extension = file.name.split('.').pop().toLowerCase();

    try {
      if (extension === 'txt') {
        const text = await file.text();
        onFileRead(text);
      } else if (extension === 'docx') {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        onFileRead(result.value);
      } else if (extension === 'pdf') {
        const typedArray = new Uint8Array(await file.arrayBuffer());
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const strings = content.items.map((item) => item.str);
          fullText += strings.join(' ') + '\n';
        }

        onFileRead(fullText);
      } else {
        alert('Unsupported file type. Please upload .txt, .docx, or .pdf.');
      }
    } catch (error) {
      console.error('Error reading file:', error);
      alert('Failed to read the file.');
    }
  };

  return (
    <label className={styles.uploadButton}>
      Upload File
      <input
        type="file"
        accept=".txt,.docx,.pdf"
        onChange={handleFileUpload}
        hidden
      />
    </label>
  );
};

export default UploadButton;
