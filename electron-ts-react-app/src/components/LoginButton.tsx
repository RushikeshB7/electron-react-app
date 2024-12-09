import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton: React.FC = () => {
  const { loginWithPopup, getAccessTokenSilently } = useAuth0();
  const isElectron = !!window.navigator.userAgent.match(/Electron/);

  const handleLogin = async () => {
    try {
      if (isElectron) {
        await loginWithPopup();
        const token = await getAccessTokenSilently();
        console.log('Access Token:', token);
      } else {
        await loginWithPopup();
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
