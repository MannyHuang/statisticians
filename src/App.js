import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomPage';
import './App.css';
import PageOne from './pages/pageone/PageOne';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/pageone' component={PageOne} />
      </Switch> 
    </div>
  );
}

export default App;
