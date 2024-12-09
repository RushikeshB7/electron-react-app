import React from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const Auth0ProviderWithHistory: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isElectron = !!window.navigator.userAgent.match(/Electron/);

  const handleToken = async () => {
    const { getAccessTokenWithPopup } = useAuth0();
    try {
      const token = await getAccessTokenWithPopup();
      console.log('Access Token:', token);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  return (
    <Auth0Provider
      domain="saleskentest.us.auth0.com"
      clientId="8Bkqr9s3zAUUrGyyeMHDzgR7EP0JSQ4T"
      authorizationParams={{
        redirect_uri: isElectron ? 'file://callback' : window.location.origin,
      }}
      onRedirectCallback={() => {
        if (isElectron) {
          handleToken(); // Fetch token after redirection
        }
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
