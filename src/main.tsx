import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@router/router';

import 'books-ui/styles';

import 'virtual:uno.css';
// import '@shared/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
