import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import SigInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SigInAndSignUp} />
            <Route exat path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
