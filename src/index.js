import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Disable all console output in production and development
if (process.env.NODE_ENV !== 'test') {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
  console.info = () => {};
  console.debug = () => {};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
