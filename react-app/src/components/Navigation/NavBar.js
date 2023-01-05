
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
            <img
            src='/images/taskly-logo.png'
            className='taskly-logo'
            alt='header-logo'
            ></img>
          </NavLink>
        </div>
        <div className='nav-right'>
        <NavLink to='/tasks/new' exact={true} activeClassName='active'>
          <button 
          type="button"
          className='create-task-btn'
          >

          Create a Task
          </button>
        </NavLink>
        {!user &&
          <>
          <NavLink to='/signup-login' exact={true} activeClassName='active'>
            <button
            type="button"
            className="signup-login-btn"
            >

           Sign up / Login
            </button>
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
