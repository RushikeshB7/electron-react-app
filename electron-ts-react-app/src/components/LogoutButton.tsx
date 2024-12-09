import React from 'react';
import useAuth from '../auth/useAuth';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  return (
    <button onClick={() => logout({
        logoutParams: { returnTo: window.location.origin },
      })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
