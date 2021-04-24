import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const Div = styled.div`
  height:300px;
  background-color:red;
  color:#fff;
  font-size:150%;
  font-weight:800;
`;

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    // autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: true
        }
      }
    ]
  };

const VisualWrap = () => {
    return (
        <Slider {...settings}>
          <Div>
              test1
          </Div>
          <Div>
              test2
          </Div>
          <Div>
              test3
          </Div>
          <Div>
              test4
          </Div>
          <Div>
              test5
          </Div>
          <Div>
              test6
          </Div>
          <Div>
              test7
          </Div>
          <Div>
              test8
          </Div>
      </Slider>
    )
}

export default VisualWrap;