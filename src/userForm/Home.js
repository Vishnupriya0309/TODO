import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from './auth';

const Home = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <div>
      <h2>Welcome!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
