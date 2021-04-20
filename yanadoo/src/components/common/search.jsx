import React from 'react';
import styled from 'styled-components';



const SearchInput = styled.input`
    width:100%;
    padding:.2em 1em;
    border:1px solid #444;
    border-radius:2em;
    outline:none;
    box-sizing:border-box;
`
const Div = styled.div`
    display:inline-block;
`


const Search = () => {
    return (
        <Div>
            <SearchInput type="text" placeholder="검색" />
        </Div>
    );
}

export default Search;