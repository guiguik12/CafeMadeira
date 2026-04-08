import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import { SectionProvider } from './app/context/SectionContext';
import { LanguageProvider } from './i18n/LanguageContext';
import '@/styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <SectionProvider>
        <App />
      </SectionProvider>
    </LanguageProvider>
  </React.StrictMode>
);
