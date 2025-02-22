import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const zoomStyle = {
  transform: 'scale(0.8)',
  transformOrigin: 'top left',
  width: '125%',
  height: '125%',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
      <App />

  </React.StrictMode>,
);
