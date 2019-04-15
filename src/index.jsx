import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './dashboard'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ff00b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <Dashboard />
    </MuiThemeProvider>
  ,
  document.getElementById("app")
)