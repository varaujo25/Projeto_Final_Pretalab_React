import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Menu from './Componentes/Menu';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Menu /> {/* Renderizando o componente Menu */}
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);