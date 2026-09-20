import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ColorModeProvider from './context/ColorModeProvider.jsx';
import LanguageProvider from './i18n/LanguageProvider.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </LanguageProvider>
  </React.StrictMode>,
);
