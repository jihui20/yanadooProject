import React from 'react';
import Slider from 'react-slick';

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
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
        <div>
            test1
        </div>
        <div>
            test2
        </div>
        <div>
            test3
        </div>
        <div>
            test4
        </div>
        <div>
            test5
        </div>
        <div>
            test6
        </div>
        <div>
            test7
        </div>
        <div>
            test8
        </div>
    </Slider>
    )
}

export default VisualWrap;