import React from 'react';
import Nav from './nav';
import styled from 'styled-components';
import Search from './search';
import MyMenu from './myMenu';
import Basket from '../contents/basket';

const Test = styled.div`
    box-sizing:border-box;


    @media ${(props) => props.theme.laptop}{
        // border:5px solid #000;
    }

    @media ${(props) => props.theme.tablet}{
        // border:5px solid green;
    }
`


const Header = () => {
    return (
        <Test>
            <div className="header-col">
                <div className="inner-col">
                    <h1 className="logo"><a href="#!"><img src="https://english.yanadoocdn.com/upload/yanadoo/pc/common/logo/logo_ynd_136x38_v2.png" alt="logo" /></a></h1>
                    <Nav />
                    <Search />
                    <p><span>이지희</span> 회원님</p>
                    <MyMenu />
                    <Basket />
                </div>
            </div>
        </Test>
    );

}

export default Header;