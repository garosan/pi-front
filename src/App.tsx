import { useState } from 'react';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <HomePage setUserFunc={setUser} />
      ) : (
        <LoginPage setUserFunc={setUser} />
      )}
    </>
  );
};

export default App;
