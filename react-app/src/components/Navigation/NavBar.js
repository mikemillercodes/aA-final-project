
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
          <NavLink to="/search" className="magnifying-glass-link">
            <i className='fa-solid fa-magnifying-glass'></i>
          </NavLink>
          <NavLink to={{pathname: "https://www.linkedin.com/in/mike-miller-546a1832/"}} target="_blank" exact={true} activeClassName='active'>
            <img 
            src='/images/linkedin-logo.png'
            className='linkedin-logo'
            alt='linkedin'
            ></img>
          </NavLink>
          <NavLink to={{pathname: "https://github.com/mikemillercodes"}} target="_blank" exact={true} activeClassName='active'>
            <img 
            src='/images/github-logo.png'
            className='github-logo'
            alt='github'
            ></img>
          </NavLink>
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
