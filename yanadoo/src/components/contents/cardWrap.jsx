import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Cardbox = styled.div`
    width:1060px;
    height:500px;
    margin:0 auto;
    border:1px solid red;

`;

const CardWrap = () => {

    const [cardInfo, setCardInfo] = useState([]);

    const cardData = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1/comments')
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
                {
                 cardInfo.map((cardList) => (
                     <li key={cardList.id}>{cardList.email}</li>
                 ))   
                }
            </ul>
        </Cardbox>
    )
}

export default CardWrap;
