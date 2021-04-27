import styled from 'styled-components';

const HeaderBox = styled.div`
    width:100%;
    padding:1em 0;
    background-color:#fff;
    box-sizing:border-box;
    border-bottom:1px solid #ccc;
    // border:1px solid red;

    .inner-col{
        display:flex;
        justify-content:space-between;
        align-items:center;
        max-width:1200px;
        margin:0 auto;
        padding:0 1em;
        // border:1px solid magenta;
        box-sizing:border-box;
    }

    .logo{
        width:7%;
      }
      
      .logo img{
        width:82px;
      }
      
      .nav-box{
        display:inline-block;
        // width:35%;
        // margin:0 9em 0 6em;
        margin-left:5em;
      }
      
      .main-nav-box{
        position:relative;
        width:100%;
        text-align:center;
      }
      
      .main-nav-box li{
        float:left;
        box-sizing:border-box;
      }
      
      .main-nav-box li a{
        display:block;
        padding:1em 1.5em;
        font-weight:800;
        color:#000;
      }
      
      .sub-nav-box{
        display:none;
        position:absolute;
        top:3.4em;
        left:0;
        padding:0 1.4em;
        background-color:#fff;
        box-shadow:.1em .1em .5em .2em rgb(0, 0, 0, .1);
        z-index:1;
      }
      
      .sub-nav-box.active{
        display:block;
      }
      
      .sub-nav-box li{
        display:block;
      }

    @media ${(props) => props.theme.laptop}{
        // border:1px solid #000;
       
    }

    @media screen and (max-width: 1100px) {
      .nav-box{
       margin-left:2em;
      }
    }

    @media ${(props) => props.theme.tablet}{
        // border:1px solid green;
        
    }
`

export default HeaderBox;