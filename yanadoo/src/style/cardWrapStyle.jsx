import styled from 'styled-components';

export const Cardbox = styled.div`
  width:100%;
  margin:5em auto 0;
  box-sizing:border-box;
  overflow:hidden;
  .swiper-test{
    max-width:1200px;
    width:100%;
    overflow:visible;
  }
  .card-item-box{
      display:inline-block;
      width:26.5em ​!important;
      box-sizing:border-box;
      vertical-align:top;
  }
   a{
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
  @media ${(props) => props.theme.tablet}{
    padding:0 1em;
    overflow:hidden;
    .swiper-test{
      margin:0;
    }
  }

  @media (max-width: 1060px){
      padding:0 1em;
  }

  @media (max-width: 640px){
    .swiper-test{
        margin:0 1em;
      }
  }
`