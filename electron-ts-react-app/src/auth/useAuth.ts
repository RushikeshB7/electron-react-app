import { useAuth0 } from '@auth0/auth0-react';

const useAuth = () => {
  const { loginWithPopup, logout, getAccessTokenSilently, user, isAuthenticated, isLoading } =
    useAuth0();

  const isElectron = !!window.navigator.userAgent.match(/Electron/);

  const login = async () => {
    if (isElectron) {
      await loginWithPopup();
      await handleToken(); // Handle the token after login
    }
  };

  const handleToken = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log('Access Token:', token);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  return { login, logout, user, isAuthenticated, isLoading };
};

export default useAuth;
