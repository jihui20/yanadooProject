import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import classData from '../../data/classData.json';
import MainTitle from './mainTitle';

const Cardbox = styled.div`
    width:1060px;
    margin:5em auto 0;
    border:1px solid red;
    li{
        display:inline-block;
        position:relative;
        width:32%;
        min-height:15em;
        margin-right:1.3em;
        padding:1em;
        vertical-align:top;
        border:1px solid #000;
        box-sizing:border-box;
        border-radius:2em;
    }
    li:nth-of-type(3n){
        margin-right:0;
        border:1px solid magenta;
    }
    .class-title{
        font-size:110%;
    }
    .class-title strong{
        display:block;
        font-size:130%;
    }
    .class-price-box{
        position:absolute;
        bottom:1em;
        right:1em;
        border:1px solid red;
    }
 
`;

const CardWrap = () => {

    return (
        <>
            
            <Cardbox>
            <MainTitle mainTitle={'내가 듣고싶은 클래스만 묶어서 들을 수 있다?!'} subTitle={'야나두 추천 멤버십'}/>
                <ul>
                    {classData &&
                    classData.map((data) => (
                        <li key={data.id}>
                            <p className="class-title">{data.subTitle}<strong>{data.mainTitle}</strong></p>
                            <div className="class-price-box">
                                <span>{data.price}</span>
                                <p>{data.discountRate}%<em>{data.totalPrice}</em></p>
                            </div>
                        </li>
                    ))   
                    }
                </ul>
            </Cardbox>
        </>
    )
}

export default CardWrap;
