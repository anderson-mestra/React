import React from 'react';
import './App.css';
import Boton from "./boton";
import Cajas from './caja';
import Titulo from './titulo';

function App() {
  return (
    <div className='App'>

      <div className='login'>
        <center>
          <Titulo />
          <Cajas /><br></br>
          <Boton />
        </center>
      </div>
    </div>
  );
}

export default App;
