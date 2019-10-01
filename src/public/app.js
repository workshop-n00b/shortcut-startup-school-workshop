/**
 * Client hydration
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.hydrate(<AppWithRouter />, document.getElementById('root'));
