import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Menu from './Componentes/Menu'; // Corrigindo o caminho do componente Menu

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Menu />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
