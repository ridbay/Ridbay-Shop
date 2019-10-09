import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'


import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions';


import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />

      <Header />
      <Switch>
        <Suspense fallback={<div>...Loading</div>}>
          <Route exact path='/' component={HomePage} />
        </Suspense>

        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />
              )
          }
        />
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);