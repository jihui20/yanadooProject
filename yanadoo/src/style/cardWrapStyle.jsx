import styled from 'styled-components';

export const Cardbox = styled.div`
  max-width:1060px;
  width:100%;
  margin:5em auto 0;

  .card-item-box{
      display:inline-block;
      width:33.3%;
      padding:1em;
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
  @media ${(props) => props.theme.laptop}{
    .card-item-box{
        width:50%;
    }
  }

  @media (max-width: 720px){
    .card-item-box{
        width:100%;
      }
  }
`