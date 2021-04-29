import styled from 'styled-components';

export const Search = styled.form`
    display:inline-block;
    margin-right:1em;
    .header-search{
        width:100%;
        height:2em;
        padding:.2em 1em;
        border:1px solid #444;
        border-radius:2em;
        outline:none;
        box-sizing:border-box;
    }
`
export const MyPage = styled.div`
    position:relative;
    margin:0 1em;
    padding:0 .3em;
    border:1px solid black;
    border-radius:1.5em;
    text-align:center;

    // .hide-mypage-menu{
    //     display:${props => props.menu ? 'block' : 'none'};
    //     position:absolute;
    //     top:1.5em;
    //     left:0;
    //     width:9em;
    //     padding:.5em;
    //     font-size:90%;
    //     background-color:#fff;
    //     box-shadow:.1em .1em .5em .2em rgb(0, 0, 0, .1);
    //     z-index:1;

    //     li + li{
    //         margin-top:.7em;
    //     }

    //     li > a{
    //         color:#000;
    //     } 
    }


`
export const HideMenu = styled.ul`
        display:${props => props.menu ? 'block' : 'none'};
        position:absolute;
        top:1.5em;
        left:0;
        width:9em;
        padding:.5em;
        font-size:90%;
        background-color:#fff;
        box-shadow:.1em .1em .5em .2em rgb(0, 0, 0, .1);
        z-index:1;

        li + li{
            margin-top:.7em;
        }

        li > a{
            color:#000;
        } 
`
export const Basket = styled.button`
    display:inline-block;
    width:20px;
    background:url(https://english.yanadoocdn.com/upload/yanadoo/pc/common/img_join_now.jpg) no-repeat 50% 0;
    background-size:100%;
    text-indent:-9999px;
`