import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

const App: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  console.log('isAuthenticated: ', isAuthenticated);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && (
        <div>
          <h2>Welcome, {user?.name}!</h2>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default App;
