import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomPage';
import './App.css';
import PageOne from './pages/pageone/PageOne';
import Header from './components/header/header';
import SignInAndSignUP from './pages/pageone/sign_in_and_sign_out/SignInAndSignUp';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/pageone' component={PageOne} />
        <Route path='/signin' component={SignInAndSignUP} />
      </Switch> 
    </div>
  );
}

export default App;
