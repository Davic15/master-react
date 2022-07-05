import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MySecondComponent from './MySecondComponent';
import { MyThirdComponent } from './MyThirdComponent';
import { MyFourthComponentEvent } from './MyFourthComponentEvent';

/**
 *  Un componente es una parte de la aplicacion.
 *  Un componente es un boton, un articulo, un menu, etc.
 *  Divide una web en partes mas pequeñas.
 * 
 *  La estructura es: 
 *    imports (recursos y dependencias);
 *    function (componente), dentro hay props (cargar en el JSX).
 *      JSX (es una "mezcla" de html y javascript).
 *    El return renderiza JSX.
 *    Al final se exporta con la etiqueta (nombre del componente).
 */


function App() {

  const ficha_medica = {
    altura: '175cm',
    grupo: "A+",
    estado: "Bueno",
    alergias: "Ninguna"
  }
  //const numero = 123456;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Comentarios dentro del JSX */}
        <div>
          <hr />
          <MyFourthComponentEvent />
          <hr />
          <MyThirdComponent 
            nombre="David" 
            apellido="Macias"
            ficha={ficha_medica}
          />
          <MySecondComponent />
          <hr />
          <MyComponent/>
        </div>

      </header>
    </div>
  );
}

export default App;
