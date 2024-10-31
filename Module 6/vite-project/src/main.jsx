import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorMessage from '../components/ErrorMessage.jsx';
import ExplodingBomb from '../components/ExplodingBomb.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
    <App />
    </ErrorBoundary>
  </StrictMode>,
);
