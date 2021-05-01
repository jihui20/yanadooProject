import styled from 'styled-components';

export const HeaderBox = styled.header`
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
        top:4.4em;
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

export const HeaderMenu = styled.div`
    display:flex;
    width:93%;
    justify-content:space-between;
    align-items:center;
    font-size:90%;
    li{
        display:inline-block;
    }

    @media ${(props) => props.theme.laptop}{
        // display:none;
        display:${props => props.mobileHover ? 'block' : 'none'};
        position:absolute;
        top:5.2em;
        left:0;
        width:100%;
        background-color:#fff;
        z-index:2;

        .nav-box {
          width:100%;
          margin-left:0;
        }
        .main-nav-box li{
          float:none;
          display:block;
          text-align:center;
        }
        .right-menu-box{
          display:none;
        }
       }
`

export const MobileMenu = styled.button`
   display:none;
   width:1.8em;
   height:1.8em;
   padding-top:.8em;
   span{
       display:block;
       position:relative;
       width:100%;
       border-top:.25em solid #000;
       text-indent:-9999px;
   }

   span:before{
       content:'';
       position:absolute;
       top:-.8em;
       left:0;
       width:100%;
       border-top:.25em solid #000;
   }

   span:after{
    content:'';
    position:absolute;
    top:.4em;
    left:0;
    width:100%;
    border-top:.25em solid #000;
}

   @media ${(props) => props.theme.laptop}{
    display:inline-block;
   }
    
`