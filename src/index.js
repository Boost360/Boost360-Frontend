import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'
import dotenv from 'dotenv';

// import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
} from "react-router-dom";

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

