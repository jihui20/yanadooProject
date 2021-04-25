import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
                console.log('성공');
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
        
        <Cardbox>
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
    )
}

export default CardWrap;
