import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {UserProvider} from './src/contexts/user';

import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/styles/theme';
import {Header} from './src/components';
import Routes from './src/routes';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes />
      </ThemeProvider>
    </UserProvider>
  );
}
