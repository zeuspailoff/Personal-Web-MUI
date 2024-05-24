import React from 'react';
import App from './App.jsx';
import './index.css';
import FonTheme from './Helpers/FontTheme.jsx';
import { ThemeProvider } from "@mui/material";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={FonTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
