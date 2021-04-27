import React from 'react';
import Nav from './nav';
import Search from './search';
import MyMenu from './myMenu';
import Basket from '../contents/basket';
import HeaderBox from '../../style/headerStyle';
import styled from 'styled-components';

const HeaderMenu = styled.div`
    display:flex;
    width:93%;
    justify-content:space-between;
    align-items:center;
    font-size:90%;
    li{
        display:inline-block;
    }

    @media ${(props) => props.theme.laptop}{
        display:none;
       }
`

const MobileMenu = styled.button`
   display:none;
   width:1.8em;
   height:1.8em;
   padding-top:.8em;
   span{
       display:block;
       position:relative;
       width:100%;
       border-top:.25em solid #000;
       text-indent:-9999px;
   }

   span:before{
       content:'';
       position:absolute;
       top:-.8em;
       left:0;
       width:100%;
       border-top:.25em solid #000;
   }

   span:after{
    content:'';
    position:absolute;
    top:.3em;
    left:0;
    width:100%;
    border-top:.25em solid #000;
}

   @media ${(props) => props.theme.laptop}{
    display:inline-block;
   }
    
`

const Header = () => {
    return (
            <HeaderBox>
                <div className="inner-col">
                    <h1 className="logo"><a href="#!"><img src="https://english.yanadoocdn.com/upload/yanadoo/pc/common/logo/logo_ynd_136x38_v2.png" alt="logo" /></a></h1>
                    <HeaderMenu>
                        <Nav />
                        <ul>
                            <li><Search /></li>
                            <li><p className="user-name"><span>이지희</span> 회원님</p></li>
                            <li><MyMenu /></li>
                            <li><Basket /></li>
                        </ul>
                    </HeaderMenu>
                    <MobileMenu type="button"><span>메뉴</span></MobileMenu>
                </div>
            </HeaderBox>
    );

}

export default Header;