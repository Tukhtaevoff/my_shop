import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contexts from './contexts/contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contexts>
    <App />
    </Contexts>
  </React.StrictMode>
);
