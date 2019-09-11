import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/shopify.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.util';

import {connect} from 'react-redux'

const Header = ({currentUser}) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className="logo" width='50px' height='39px'/>
        </Link>
        <div className='options'>

            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        {
            currentUser ? 
            <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
        }
        </div>
    </div>
)

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);