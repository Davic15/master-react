import logo from './logo.svg';
import './App.css';
import { NewComponent } from './Components/NewComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewComponent />
      </header>
    </div>
  );
}

export default App;
