import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const contenedor = document.getElementById('root');
const root = createRoot(contenedor);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);