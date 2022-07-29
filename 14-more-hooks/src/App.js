import logo from './logo.svg';
import './App.css';
import { MyComponent } from './Components/MyComponent';
import { CustomHooks } from './Components/CustomHooks';
import { MyForm } from './Components/MyForm';
import { MyUser } from './Components/MyUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<MyForm />*/}
        {/*<CustomHooks />*/}
        <MyUser />
      </header>
    </div>
  );
}

export default App;
