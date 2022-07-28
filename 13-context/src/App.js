import { useState, useEffect } from 'react';
import './App.css';
import { ContextWork } from './Context/Context';
import { AppRouter } from './Routing/AppRouter';

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    let localUser = JSON.parse(localStorage.getItem('user'));
    setUser(localUser);
  }, [])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  const course = {
    id: 1,
    title: 'Master in React',
    content: "Too much informacion"
  }

  return (
    <div className="App">
      <ContextWork.Provider value={{
        user, setUser
      }}>
        <AppRouter />
      </ContextWork.Provider>
    </div>
  );
}

export default App;
