import logo from './logo.svg';
import './App.css';
import { Manager } from './Components/Manager';
import { Task } from './Components/Task';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Method memo for components */}
        {/*<Manager/>*/}

        {/* Hook Memo */}
        <Task />
      </header>
    </div>
  );
}

export default App;
