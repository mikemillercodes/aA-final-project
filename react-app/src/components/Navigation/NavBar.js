
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav-outer'>
        <div className='nav-left'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
      <div className='nav-right'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
     
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
      
          <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
