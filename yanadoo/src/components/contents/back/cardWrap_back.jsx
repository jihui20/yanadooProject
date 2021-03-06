import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MainTitle from '../mainTitle';

const Cardbox = styled.div`
    width:1060px;
    margin:5em auto 0;
    border:1px solid red;
    li{
        display:inline-block;
        width:33.3%;
        min-height:15em;
        vertical-align:top;
        border:1px solid #000;
        box-sizing:border-box;
    }
    img{
        display:block;
        width:200px;
        margin:0 auto;
    }
 
`;

const CardWrap = () => {

    const [cardInfo, setCardInfo] = useState([]);

    const cardData = () => {
        axios
        .get('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then(({data}) => {
                // console.log('성공');
                setCardInfo(data);
            })
            .catch(e => {
                console.log(e);
            })

    }

    useEffect(() => {
        cardData();
        
    }, [])


    return (
        <>
            
            <Cardbox>
            <MainTitle mainTitle={'내가 듣고싶은 클래스만 묶어서 들을 수 있다?!'} subTitle={'야나두 추천 멤버십'}/>
                <ul>
                    {cardInfo &&
                    cardInfo.filter(cardList => cardList.id < 7).map((cardList) => (
                        <li key={cardList.id}>
                            <img src={cardList.url} alt="" />
                            <p>{cardList.title}</p>
                        </li>
                    ))   
                    }
                </ul>
            </Cardbox>
        </>
    )
}

export default CardWrap;
