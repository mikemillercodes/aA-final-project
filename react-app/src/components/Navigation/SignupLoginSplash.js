
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SignupLoginSplash.css'


const SignupLoginSplash = () => {
    const user = useSelector((state) => state.session.user)

    return (
        <nav className='splash-outer'>
            <div className='top'>
                <NavLink to='/signup' exact={true} activeClassName='active'>
                    <button id='signup-button' type="button">
                        Sign up for Taskly!
                    </button>
                </NavLink>
                <NavLink to='/login' exact={true} activeClassName='active'>
                    <button id='login-button' type="button">
                        Login to your Taskly account
                    </button>
                </NavLink>
            </div>
        </nav>
    );
}

export default SignupLoginSplash;