import React from 'react';
import './HeaderCompoent.css'

//material ui icons
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


const HeaderCompoent = () => {
    return (
        <div className="header">
            <div className='header_logo'>
                <StorefrontIcon className='header_logoImage' fontSize='large' />
                <h2 className='header_logoText'>eShop</h2>
            </div>
            <div className='header_search'>
                <input type='text' className='header_searchInput' placeholder='Enter value' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <div className='nav_item'>
                    <span className='nav_itemLineOne'>Hello</span>
                    <span className='nav_itemLineTwo'>Sign In</span>
                </div>
                <div className='nav_item'>
                    <span className='nav_itemLineTwo'>Your Shop</span>
                    <span className='nav_itemLineTwo'></span>
                </div>
                <div className='nav_item'>
                    <span className='nav_itemLineTwo'><AddShoppingCartRoundedIcon /></span>
                    <span className='nav_itemLineTwo'>0</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderCompoent