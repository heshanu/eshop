import React, { useState} from 'react';
import './HeaderCompoent.css'

//importing react router dom link
import { Link, NavLink } from "react-router-dom"

//material ui icons
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {useStateValue} from '../../state/stateProvider';

const HeaderCompoent = () => {
    const [{basket},dispatch]=useStateValue();

    return (
        <div className="header">
            <Link to={'/'}>
                <div className='header__logo'>
                    <StorefrontIcon className='header__logoImage' fontSize='large' />
                    <h2 className='header__logoTitle'>eShop</h2>
                </div>
            </Link>

            <div className='header__search'>
                <input type='text' className='header__searchInput' placeholder='Enter value' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                <div className='nav_item'>
                    <span className='nav__itemLineOne'>Hello</span>
                    <span className='nav__itemLineTwo'>Sign In</span>
                </div>
                <div className='nav__item'>
                    <span className='nav__itemLineTwo'>Your Shop</span>
                    <span className='nav__itemLineTwo'>Heshan</span>
                </div>

                <NavLink to={"/checkout"}>
                    <div className='nav__item'>
                        <span className='nav__itemLineTwo'><AddShoppingCartRoundedIcon className='itemBasket' /></span>
                        <span className='nav__itemLineTwo nav__basketCount' >{basket.length}</span>
                    </div>
                </NavLink>

            </div>
        </div>

    )
}

export default HeaderCompoent