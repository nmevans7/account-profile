import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import AccountProvider from './providers/AccountProvider';
ReactDOM.render(
  <React.StrictMode>
    <AccountProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AccountProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


