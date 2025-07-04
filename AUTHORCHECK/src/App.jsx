import { useState } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import DualPanel from './components/DualPanel/DualPanel';
import TextInputPanel from './components/TextInputPanel/TextInputPanel';
import Tabs from './components/Tabs/Tabs';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null); // Holds backend analysis result
  const [loading, setLoading] = useState(false); // ✅ Add this!

  return (
    <div>
      <HeroSection />
      <Navbar />

      <DualPanel
        leftPanel={
          <TextInputPanel
            text={text}
            setText={setText}
            onAnalyze={setResult}
            setLoading={setLoading} // ✅ Pass this to ScanButton
          />
        }
        rightPanel={
          loading ? (
            <LoadingSpinner />
          ) : (
            <Tabs text={text} analysisResult={result} />
          )
        }
      />
    </div>
  );
}

export default App;
