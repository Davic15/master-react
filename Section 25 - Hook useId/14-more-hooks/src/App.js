import './App.css';
import { CustomHooks } from './Components/CustomHooks';
import { MyComponent } from './Components/MyComponent';
import { MyForm } from './Components/MyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyForm />
        {/*<CustomHooks />*/}
        {/*<MyComponent />*/}
      </header>
    </div>
  );
}

export default App;
