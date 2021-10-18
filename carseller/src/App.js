import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import index from './components/pages/index';
import Form from './components/Form';
import hometopo from './components/images/hometopo.png';
import rodape from './components/images/rodape.png';
import './components/ImagemTopo.css';
import contato from './components/pages/contato';
import entrar from './components/pages/entrar';





function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar />
          <hometopo className='hometopo'>
              <img src={(hometopo)} alt='hometopo' /> 
              <figcaption>CARROS PERTINHO DE VOCÊ</figcaption>
              <label>"Excelência não é uma habilidade, é uma atitude"</label>
              <h3>RALPH MARSTON</h3>
              <h1>________</h1>
              <button className='btn-home' type='submit'>
                    ENCONTRE O SEU
                </button>
          </hometopo>

          <rodape className='rodape'>
          <img src={(rodape)} alt='rodape' />
          </rodape>
          
        <Switch>
          <Route path='/' exact component={index}></Route>
          <Route path='/cadastrar' exact component={Form}></Route>
          <Route path='/contato' exact component={contato}></Route>
          <Route path='/entrar' exact component={entrar}></Route>
        </Switch>
      </BrowserRouter>

      
    </>
  );
}

export default App;