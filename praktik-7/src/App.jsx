import React from 'react';
import BasicFetchingDemo from './components/BasicFetchingDemo';
import AdvancedFetchingDemo from './components/AdvancedFetchingDemo';
import CRUDOperationsDemo from './components/CRUDOperationsDemo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Praktik Fetch Data dengan React</h1>
        <p>Demonstrasi berbagai teknik fetching data dalam React</p>
      </header>

      <main className="app-main">
        <div className="demo-section">
          <BasicFetchingDemo />
        </div>

        <div className="demo-section">
          <AdvancedFetchingDemo />
        </div>

        <div className="demo-section">
          <CRUDOperationsDemo />
        </div>
      </main>
    </div>
  );
}

export default App;