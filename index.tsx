import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// We need to clear the static HTML content provided in the index.html 
// so React can render the enhanced animated version.
// The styles in the <head> will be preserved.
document.body.innerHTML = '<div id="root"></div>';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);