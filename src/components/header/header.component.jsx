import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/shopify.svg';

import './header.styles.scss';

import CardIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown//cart-dropdown.component';
import { auth } from '../../firebase/firebase.util';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className="logo" width='50px' height='39px' />
        </Link>
        <div className='options'>

            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to='/signin'>SIGN IN</Link>
            }
            <CardIcon />
        </div>
        {
            hidden ? (null): (<CartDropdown />)
        }

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);