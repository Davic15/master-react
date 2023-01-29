import './App.css';
import { CustomHooks } from './Components/CustomHooks';
import { MyComponent } from './Components/MyComponent';
import { MyForm } from './Components/MyForm';
import { MyUser } from './Components/MyUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyUser />
        {/*<MyForm />*/}
        {/*<CustomHooks />*/}
        {/*<MyComponent />*/}
      </header>
    </div>
  );
}

export default App;
