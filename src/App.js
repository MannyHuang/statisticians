import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./homepage/homepage/HomPage";
import "./App.css";
import Header from "./components/header/header";
import SignIn from "./components/sign_in/SignIn";
import { auth } from "./components/firebase/FirebaseUtils";
import ProfileDetail from "./components/ProfileDetail/ProfileDetail";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/statisticians" component={HomePage} />
          <Route exact path="/people" component={HomePage} />
          <Route path="/people/:id" component={ProfileDetail} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
