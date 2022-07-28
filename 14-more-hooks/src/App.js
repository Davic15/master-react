import logo from './logo.svg';
import './App.css';
import { MyComponent } from './Components/MyComponent';
import { CustomHooks } from './Components/CustomHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomHooks />
      </header>
    </div>
  );
}

export default App;
