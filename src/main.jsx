import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'

const root = createRoot(document.getElementById('root'));
const h1 = createElement("h1", null, "Hello Đ.A");

root.render(
  <App />
);
