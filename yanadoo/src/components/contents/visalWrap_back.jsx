import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import axios from 'axios';

const VisualSlide = styled.div`
  max-width:1060px;
  width:100%;
  margin:0 auto;
  font-size:120%;
  font-weight:800;
  color:#000;
  word-break:keep-all;
  box-sizing:border-box;
  .test{
    position:relative;
    height:300px;
    background-repeat:no-repeat;
    background-position:50% 50%;
    background-size:cover;
  }
  .test p{
    display:inline-block;
    position:absolute;
    bottom:1em;
    left:.5em;
    background-color:rgba(255, 255, 255, .5);
  }

  @media ${(props) => props.theme.laptop}{
    padding:0 1em;
   }
`;

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    // autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          autoplay: true
        }
      }
    ]
  };

const VisualWrap = () => {

  const [slideInfo, setslideInfo] = useState([]);

  const slidedData = () => {
      axios
          .get('https://english.yanadoocdn.com/upload/yanadoo/pc/pilot/arrayData.json')
          .then(({data}) => {
              setslideInfo(data);
          })
          .catch(e => {
              console.log(e);
          })

  }

  useEffect(() => {
    slidedData();
  }, [])


    return (
      <VisualSlide>
        <Slider {...settings}>
          {slideInfo &&
            slideInfo.map((slideList, idx) => (
              <div key={idx}>
                {/* <img src={slideList.picture} alt={slideList.title} /> */}
                <div className="test" style={{backgroundImage: `url(` + slideList.picture + `)`}}>
                  <p>{slideList.title}</p>
                </div>
              </div>
            ))

          }

      </Slider>
      </VisualSlide>
    )
}

export default VisualWrap;