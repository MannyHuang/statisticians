import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomPage';
import './App.css';
import PageOne from './components/shop/ShopPage.js'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={PageOne} />
      </Switch> 
    </div>
  );
}

export default App;
