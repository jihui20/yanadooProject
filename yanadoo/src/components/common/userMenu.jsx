import React, { useState } from 'react';
import {SearchS, HideMenuS, MyPageS, BasketS} from '../../style/userMenuStyle';


const UserMenu = () => {
    const [MenuHover, setMenuHover] = useState(false);

    const handleMenu = () => {
        setMenuHover(!MenuHover);
    }
    return (
        
        <div className="header-menu-box">
            <ul>
                <li>
                    <SearchS>
                        <input type="text" className="header-search" placeholder="검색" />
                    </SearchS>
                </li>
                <li>
                    <p className="user-name"><span>이지희</span> 회원님</p>
                </li>
                <li>
                    <MyPageS>
                        <button type="button" className="mypage-toggle-btn" onClick={handleMenu}>마이 페이지</button>
                        <HideMenuS className="hide-mypage-menu" menu={MenuHover}>
                            <li><a href="#!">내 클래스</a></li>
                            <li><a href="#!">주문 배송 조회</a></li>
                            <li><a href="#!">쿠폰</a></li>
                            <li><a href="#!">찜한 상품</a></li>
                            <li><a href="#!">나의 문의내역</a></li>
                            <li><a href="#!">로그아웃</a></li>
                        </HideMenuS>
                    </MyPageS>
                </li>
                <li>
                    <BasketS type="button">장바구니</BasketS>
                </li>
            </ul>
        </div>

    );
}

export default UserMenu;