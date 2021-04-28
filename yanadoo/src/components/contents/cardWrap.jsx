import React from 'react';
import styled from 'styled-components';
import classData from '../../data/classData.json';
import MainTitle from './mainTitle';

const Cardbox = styled.div`
    max-width:1060px;
    width:100%;
    margin:5em auto 0;

    ul{margin-top:3em;}

    li{
        display:inline-block;
        width:33.3%;
        padding:1em;
        box-sizing:border-box;
        vertical-align:top;
    }
    li a{
        display:block;
        position:relative;
        min-height:15em;
        padding:1em;
        border:1px solid #000;
        box-sizing:border-box;
        border-radius:2em;
        color:#000;
    }
    .class-title strong{
        display:block;
        font-size:120%;
    }
    .class-price-box{
        position:absolute;
        bottom:.8em;
        right:1em;
        font-size:170%;
        font-weight:800;
        text-align:right;
    }
    .class-price-box span{
        font-size:70%;
        font-weight:300;
    }
    .class-price-box p{
       color:red;
    }
    .class-price-box em{
        font-weight:800;
       color:#000;
    }
    @media ${(props) => props.theme.laptop}{
       li{
           width:50%;
       }
    }
    
    @media (max-width: 720px){
        li{
           width:100%;
        }
    }
`;

const CardWrap = () => {

    return (
        <>
            
            <Cardbox>
            <MainTitle align={false} mainTitle={'내가 듣고싶은 클래스만 묶어서 들을 수 있다?!'} subTitle={'야나두 추천 멤버십'}/>
                <ul>
                    {classData &&
                    classData.map((data) => (
                        <li key={data.id}>
                            <a href="#!">
                                <p className="class-title">{data.subTitle}<strong>{data.mainTitle}</strong></p>
                                <div className="class-price-box">
                                    <span>{data.price}</span>
                                    <p>{data.discountRate}%<em>{data.totalPrice}</em></p>
                                </div>
                            </a>
                        </li>
                    ))   
                    }
                </ul>
            </Cardbox>
        </>
    )
}

export default CardWrap;
