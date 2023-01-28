import logo from './logo.svg';
import './App.css';
import { Admin } from './Components/Admin';
import { Task } from './Components/Task';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* useMemo hook */}
        {/*<Task />*/}
        {/* Memo method*/}
        <Admin />
      </header>
    </div>
  );
}

export default App;
