import React from 'react';
import Nav from './nav';
import styled from 'styled-components';
import Search from './search';
import MyMenu from './myMenu';

const ButtonStyle = styled.button`
padding:1em;
background-color:green;
`


const Header = () => {
    return (
        <div className="header-col">
            <div className="inner-col">
                <h1 className="logo"><a href="#"><img src="https://english.yanadoocdn.com/upload/yanadoo/pc/common/logo/logo_ynd_136x38_v2.png" alt="logo" /></a></h1>
                <Nav />
                {/* <ButtonStyle>안녕</ButtonStyle> */}
                <Search />
                <p><span>이지희</span> 회원님</p>
                <MyMenu />
            </div>
        </div>
    );

}

export default Header;