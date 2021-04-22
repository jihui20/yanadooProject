import React from 'react';
import Nav from './nav';
// import styled from 'styled-components';
import Search from './search';
import MyMenu from './myMenu';
import Basket from '../contents/basket';


const Header = () => {
    return (
        <div className="header-col">
            <div className="inner-col">
                <h1 className="logo"><a href="#"><img src="https://english.yanadoocdn.com/upload/yanadoo/pc/common/logo/logo_ynd_136x38_v2.png" alt="logo" /></a></h1>
                <Nav />
                <Search />
                <p><span>이지희</span> 회원님</p>
                <MyMenu />
                <Basket />
            </div>
        </div>
    );

}

export default Header;