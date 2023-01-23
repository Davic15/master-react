import logo from './logo.svg';
import './App.css';
import { MyComponent } from './MyComponent';
import { SecondComponent } from './SecondComponent';
import { ThirdComponent } from './ThirdComponent';
import { EventComponent } from './EventComponent';

function App() {

  const medicalRecord = {
    height: '175cm',
    bloodType: 'A+',
    allergies: 'No'
  }
  const number = 123;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>

        <div className='components'>
          <EventComponent />
          <hr/>
          <ThirdComponent name='David' surname='Macias' record={medicalRecord}/>
          <hr />
          <SecondComponent />
          <hr />
          <MyComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
