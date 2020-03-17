import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/FirebaseUtils';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import './header.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link  to='/'>
      <span className='logo-container'>
        <Logo className='logo' />
        <h1>The Statisticians</h1>
      </span>
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        HALL OF FAME
      </Link>
      <Link className='option' to='/cankao'>
        CANKAO
      </Link>
      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }

    </div>
  </div>
)

export default Header;