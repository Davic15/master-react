import logo from './logo.svg';
import './App.css';
import { MyFirstState } from './Components/MyFirstState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Hook useState</h1>
        <MyFirstState />
      </header>
    </div>
  );
}

export default App;
