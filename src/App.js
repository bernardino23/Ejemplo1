import React, { Component } from 'react';
import './App.css';
import Header from './Componentes/Header';
import Body from './Componentes/Body';
import Footer from './Componentes/Footer';
import Fecha from './Componentes/Fecha';
import Logo from './Componentes/Logo';

class App extends Component{

  render(){
  return (
    <div className="App">
      <Header/>
      <Logo/>
      <Fecha/>
      <Body/>
      <Footer copyr = {<p>Copyright &copy; Todos los derechos reservados.</p>} />
    </div>
  )};
}

export default App;