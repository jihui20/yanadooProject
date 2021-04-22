import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display:inline-block;
    width:20px;
    background:url(https://english.yanadoocdn.com/upload/yanadoo/pc/common/img_join_now.jpg) no-repeat 50% 0;
    background-size:100%;
    text-indent:-9999px;
`

const Basket = () => {
    return (
        <Btn type="button">장바구니</Btn>
    );
}

export default Basket;