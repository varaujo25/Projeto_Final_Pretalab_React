import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import Footer from './componentes/Footer/Footer';
import Sobre from './pages/Sobre';
import Comentarios from './pages/Comentarios';
import Contato from './pages/Contato';
import Home from './pages/Home/Home';

function App() {
  console.log('App rendered');
  
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/comentarios" element={<Comentarios />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
