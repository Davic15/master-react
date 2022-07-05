import logo from './logo.svg';
import './App.css';
import { MyFirstState } from './Components/MyFirstState';
import { ExampleComponent } from './Components/ExampleComponent';

function App() {
  const fecha = new Date();
  const year = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado en React - Hook useState</h1>
        <MyFirstState />
        <ExampleComponent year={year}/>
      </header>
    </div>
  );
}

export default App;
