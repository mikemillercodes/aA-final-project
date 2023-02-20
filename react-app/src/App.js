import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Search from './components/Search/Search';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import TaskIndex from './components/TaskIndex/TaskIndex';
import SingleTask from './components/SingleTask/SingleTask';
import TaskCreateForm from './components/TaskForm/CreateTask';
import TaskUpdateForm from './components/TaskForm/UpdateTask';
import ReviewIndex from './components/ReviewsIndex/ReviewsIndex';
import ReviewUpdateForm from './components/ReviewsIndex/UpdateReview';
import ReviewCreateForm from './components/ReviewsIndex/CreateReview';
import SignupLoginSplash from './components/Navigation/SignupLoginSplash';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/'>
      <NavBar />
        <TaskIndex />
      </Route>
    </Switch>
      <ProtectedRoute path='/tasks/:id/update' exact={true}>
        <NavBar />
        <TaskUpdateForm />
      </ProtectedRoute>
      <ProtectedRoute path='/tasks/:id/reviews/new' exact={true}>
        <ReviewCreateForm />
      </ProtectedRoute>
      <ProtectedRoute path='/reviews/:id/update' exact={true}>
        <ReviewUpdateForm />
      </ProtectedRoute>
      <Switch>
        <Route path='/signup-login' exact={true}>
          <SignupLoginSplash />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm /> 
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
      <Route path='/tasks/:id' exact={true}>
      <NavBar />
        <SingleTask />
        <ReviewIndex />
      </Route>
      <ProtectedRoute path='/tasks/new'>
        <TaskCreateForm />
      </ProtectedRoute>
      <Route
        path='/search'
        exact={true}
      >
        <Search />
      </Route>
    </BrowserRouter>
  );
}

export default App;
