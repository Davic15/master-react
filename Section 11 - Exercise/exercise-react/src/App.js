import logo from './logo.svg';
import './App.css';
import { NewComponent } from './Components/NewComponent';

function App() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Main Component</h1>
        <NewComponent year={year}/>
      </header>
    </div>
  );
}

export default App;