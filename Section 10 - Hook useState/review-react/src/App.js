import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './Components/FirstComponent';
import { SecondComponent } from './Components/SecondComponent';

function App() {
  return (
    <div className="App">http://localhost:3000/
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Review Angular</p>
        <hr />
        <FirstComponent />
        <hr />
        <SecondComponent />
      </header>
    </div>
  );
}

export default App;
