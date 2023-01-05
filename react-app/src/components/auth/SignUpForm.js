import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp} className='signup-form'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='signup-outer'>
        <div className='signup-labels'>
          <label>User Name</label>
          <input
            className='user-input'
            type='text'
            name='username'
            placeholder='Please provide a user name.'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='signup-labels'>
          <label>Email</label>
          <input
            className='email-input'
            type='text'
            name='email'
            placeholder='Enter your email address.'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='signup-labels'>
          <label>Password</label>
          <input
            className='password-input'
            type='password'
            name='password'
            placeholder="Hopefully it's not 'password'"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='signup-labels'>
          <label>Repeat Password</label>
          <input
            className='repeat-password-input'
            type='password'
            name='repeat_password'
            placeholder='Once more for the people in the back.'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
      <button type='submit'>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
