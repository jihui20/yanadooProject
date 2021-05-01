import React  from 'react';
import styled from 'styled-components';

const Title = styled.p`
    display:block;
    font-size:150%;
    text-align:center;

    strong{display:block;}

    text-align:${props => props.alignStyle || 'center'}
`;


const MainTitle = (props) => {

    return (
        <Title alignStyle={props.alignStyle}>
            {props.subTitle}
            <strong>{props.mainTitle}</strong>
        </Title>
    )
}

export default MainTitle;