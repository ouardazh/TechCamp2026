import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StepContext from './pages/Registration/components/StepContext.jsx';

createRoot(document.getElementById('root')).render(
  <StepContext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StepContext>
);
