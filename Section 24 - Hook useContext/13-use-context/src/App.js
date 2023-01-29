import { useEffect, useState } from 'react';
import './App.css';
import { MyContext } from './Context/MyContext';
import { AppRouter } from './MyRoutes/AppRouter';

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    //* It runs when the component is loaded.
    const localUser = JSON.parse(localStorage.getItem('user'));
    setUser(localUser);
  }, [])

  useEffect(() => {
    //* When the user is updated, save it in the localStorage
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  /*const course = {
    id: 1,
    title: 'React',
    content: 'Videos and projects'
  }*/

  return (
    <div className="App">
      <MyContext.Provider value={{user, setUser}}>
        <AppRouter />
      </MyContext.Provider>
    </div>
  );
}

export default App;
