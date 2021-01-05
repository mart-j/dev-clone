import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { fetchUser } from './store/user/actions';

import { fetchPostsAction } from './store/posts/actions';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchPostsAction(dispatch);
  }, []);

  const checkCurrentUser = async () => {
    const path = location.pathname;
    const authToken = localStorage['x-auth-token'] || '';
    const header = {
      headers: { 'x-auth-token': authToken },
    };
    const { data: tokenResponse } = await axios.post(
      'https://dev-clone.herokuapp.com/users/tokenIsValid',
      null,
      header,
    );

    if (tokenResponse && (path === '/login' || path === '/register')) {
      history.push('/');
    }

    // if token is valid > continue..
    if (tokenResponse) {
      const { data } = await axios.get('https://dev-clone.herokuapp.com/users', header);

      dispatch(
        fetchUser({
          token: authToken,
          user: data,
        }),
      );
    }
  };

  useEffect(() => {
    checkCurrentUser();
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
