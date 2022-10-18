import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MantineContexts from './lib/Mantine';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineContexts>
      <App />
    </MantineContexts>
  </React.StrictMode>
);
