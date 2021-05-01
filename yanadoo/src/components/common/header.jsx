import React, { useState } from 'react';
import Nav from './nav';
import UserMenu from './userMenu';
import {HeaderBox, HeaderMenu, MobileMenu} from '../../style/headerStyle';

const Header = () => {
    const [MobileMenuHover, setMobileMenuHover] = useState(false);

    const mobileHover = () => {
        setMobileMenuHover(!MobileMenuHover);
    }

    return (
            <HeaderBox>
                <div className="inner-col">

                    <h1 className="logo"><a href="#!"><img src="https://english.yanadoocdn.com/upload/yanadoo/pc/common/logo/logo_ynd_136x38_v2.png" alt="logo" /></a></h1>
                    <HeaderMenu mobileHover={MobileMenuHover}>
                        <Nav />
                        <UserMenu />
                    </HeaderMenu>
                    <MobileMenu type="button" onClick={mobileHover}><span>메뉴</span></MobileMenu>

                </div>
            </HeaderBox>
    );

}

export default Header;