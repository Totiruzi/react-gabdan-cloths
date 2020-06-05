import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header.component'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import SigInAndSignUp from './components/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigInAndSignUp} />
          <Route exat path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
