 import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
    <h1>7-Day Fitness Kickstart</h1>
    <p>Build Strength, Boost Energy, and Embrace Wellness</p>
    <a href="https://your-gumroad-link.com" target="_blank" rel="noopener noreferrer">
      <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Download Now</button>
    </a>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
