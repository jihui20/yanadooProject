import React  from 'react';
import styled from 'styled-components';

const Title = styled.p`
    display:block;
    font-size:150%;
    text-align:center;

    strong{display:block;}

    text-align:${test => test.align ? 'center' : 'left'};
`;


const MainTitle = (test) => {

    return (
        <Title align={test.align}>
            {test.subTitle}
            <strong>{test.mainTitle}</strong>
        </Title>
    )
}

export default MainTitle;