import React from 'react';
import {UserProvider} from './src/contexts/user';

import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/styles/theme';
import {Header} from './src/components';
import Routes from './src/routes';

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes />
      </ThemeProvider>
    </UserProvider>
  );
}
