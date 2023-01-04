
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import './NavBar.css'


const NavBar = () => {
  const user = useSelector((state) => state.session.user)

  return (
    <nav className='nav-outer'>
        <div className='nav-left'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        <div className='nav-right'>
        <NavLink to='/tasks/new' exact={true} activeClassName='active'>
          Create a Task
        </NavLink>
        {!user &&
          <>
          <NavLink to='/signup-login' exact={true} activeClassName='active'>
           Sign up / Login
          </NavLink>
          </>
        }
      
        {user && 
          <LogoutButton />
        }
      </div>
    </nav>
  );
}

export default NavBar;
