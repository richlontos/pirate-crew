import React from 'react';
import { Router, Redirect } from '@reach/router';
import './App.css';

import AllPiratesPage from './views/AllPiratesPage';
import NewPiratePage from './views/NewPiratePage';
import SinglePiratePage from './views/SinglePiratePage';

function App() {
  return (
    <div className="App">
      <Router>
        <AllPiratesPage path="pirates" />
        <NewPiratePage path="pirates/new" />
        <SinglePiratePage path="pirates/:id" />
        <Redirect from="/" to="pirates" noThrow />
      </Router>
    </div>
  );
}

export default App;
