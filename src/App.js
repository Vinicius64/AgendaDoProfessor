import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaDeDisciplinas from './components/ListaDeDisciplinas';
import SalvarArquivo from './components/SalvarArquivo';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <p>Conteúdo principal aqui</p>
        <ListaDeDisciplinas />
        <div className="turno-section">
          <p>Selecione o turno:</p>
          <label>
            <input type="radio" name="options" value="M" /> Matutino
          </label>
          <label>
            <input type="radio" name="options" value="V" /> Vespertino
          </label>
          <label>
            <input type="radio" name="options" value="N" /> Noturno
          </label>
        </div>
        <SalvarArquivo />
      </main>
      <Footer />
    </div>
  );
}
