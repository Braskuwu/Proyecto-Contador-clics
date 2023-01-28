import './App.css';
import Contador from './componentes/contador';
import Boton from './componentes/Boton';
import logoBrask from './imagenes/logo-brask.jpg'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='brask-logo-contenedor'>
        <img 
        className='brask-logo'
        src={logoBrask} 
        alt='Logo Brask' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
