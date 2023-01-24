import logo from './logo.svg';
import './App.css';
import { AjaxComponent } from './Components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AjaxComponent />
      </header>
    </div>
  );
}

export default App;
