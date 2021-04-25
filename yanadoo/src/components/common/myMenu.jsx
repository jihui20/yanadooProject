import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position:relative;
    margin:0 1em;
    padding:0 .3em;
    border:1px solid black;
    border-radius:1.5em;
`

const Ul = styled.ul`
   display:${props => props.menuhover ? 'block' : 'none'};
   position:absolute;
   top:1.5em;
   left:0;
   width:9em;
   background-color:pink;
   z-index:1;
`

const MyMenu = () => {
    const [MenuHover, setMenuHover] = useState(false);

    const handleMenu = () => {
        // console.log('흑흙');
        setMenuHover(!MenuHover);
    }

    return (
        <Div>
            <button type="button" onClick={handleMenu}>마이 페이지</button>
            {/* <ul menuhover={MenuHover}> */}
            <Ul menuhover={MenuHover}>
                <li><a href="#!">내 클래스</a></li>
                <li><a href="#!">주문 배송 조회</a></li>
                <li><a href="#!">쿠폰</a></li>
                <li><a href="#!">찜한 상품</a></li>
                <li><a href="#!">나의 문의내역</a></li>
                <li><a href="#!">로그아웃</a></li>
            </Ul>
        </Div>
    );
}

export default MyMenu;