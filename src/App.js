import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'; // v1.x
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import './App.css';
import Header from './common/Header';
import Home from './home'
import CreateList from './createList';
import store from './store';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#00b0ff',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/lista/:action' component={CreateList} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
