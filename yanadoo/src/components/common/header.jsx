import React, { useState } from 'react';
import Nav from './nav';
import UserMenu from './userMenu';
import {HeaderBoxS, HeaderMenuS, MobileMenuS} from '../../style/headerStyle';

const Header = () => {
    const [MobileMenuHover, setMobileMenuHover] = useState(false);

    const mobileHover = () => {
        setMobileMenuHover(!MobileMenuHover);
    }

    return (
            <HeaderBoxS>
                <div className="inner-col">

                    <h1 className="logo"><a href="#!"><img src="https://english.yanadoocdn.com/upload/yanadoo/pc/common/logo/logo_ynd_136x38_v2.png" alt="logo" /></a></h1>
                    <HeaderMenuS mobileHover={MobileMenuHover}>
                        <Nav />
                        <UserMenu />
                    </HeaderMenuS>
                    <MobileMenuS type="button" onClick={mobileHover}><span>메뉴</span></MobileMenuS>

                </div>
            </HeaderBoxS>
    );

}

export default Header;