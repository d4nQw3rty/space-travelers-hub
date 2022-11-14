import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './app/store';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
