import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';
import './App.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
);

// Register the PWA service worker
registerSW({ immediate: true });
