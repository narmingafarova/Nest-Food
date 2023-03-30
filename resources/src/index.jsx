import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/bootstrap.min.css";
import "./scss/style.scss";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
