import React from 'react';
import './HeaderCompoent.css'

//material ui icons
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const HeaderCompoent = () => {
    return (
        <div className="header">
            <div className='header__logo'>
                <StorefrontIcon className='header__logoImage' fontSize='large' />
                <h2 className='header__logoTitle'>eShop</h2>
            </div>
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
                <div className='nav__item'>
                    <span className='nav__itemLineTwo'><AddShoppingCartRoundedIcon className='itemBasket'/></span>
                    <span className='nav__itemLineTwo nav__basketCount' >0</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderCompoent