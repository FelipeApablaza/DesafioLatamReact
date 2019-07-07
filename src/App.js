import React from 'react';
import './App.css';
import './assets/css/style.css';
import characters from './assets/js/heroes';

import DefaultApp from './components/default';
import List from './components/desafio1/lista';
import HeroTable from './components/desafio2/HeroTable';




function Desafio2() {
  return (
    <div className="index">
      <h2>Fellowship of the Ring</h2>
      <div className={'container'}>
        <HeroTable arreglo={characters}/>
      </div>
    </div>
  );
}

function Desafio1() {
  return (
    <div className="App">
      <ul>
        {
          characters.map((item, index) => <List key={index} character={item} />)
        }
      </ul>
    </div>
  );
}

function Default() {
  return (
    <div className="App">
      <DefaultApp />
    </div>
  );
}

export default Default;