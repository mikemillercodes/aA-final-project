import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import TaskIndex from './components/TaskIndex/TaskIndex';
import SingleTask from './components/SingleTask/SingleTask';
import TaskCreateForm from './components/TaskForm/CreateTask';
import TaskUpdateForm from './components/TaskForm/UpdateTask';

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
      <NavBar />
    <Switch>
      <Route exact path='/'>
        <TaskIndex />
      </Route>
    </Switch>
      <ProtectedRoute path='/tasks/:id/update' exact={true}>
        <TaskUpdateForm />
      </ProtectedRoute>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
      <Route path='/tasks/:id' exact={true}>
        <SingleTask />
      </Route>
      <ProtectedRoute path='/tasks/new'>
        <TaskCreateForm />
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
