
import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
// import C2FTable from './components/C2FTable';
import C2FTableGrid from './components/C2FTableGrid';
import './styles/S4Grid.css';


console.log("index.js: About to create root")
const root = createRoot(document.getElementById('sohov4_root'));

console.log("index.js: About to render App")
root.render(<C2FTableGrid />);
// root.render(<App />);

