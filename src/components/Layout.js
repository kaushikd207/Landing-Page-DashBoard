import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../auth';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
