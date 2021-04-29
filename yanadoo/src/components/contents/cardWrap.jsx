import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classData from '../../data/classData.json';
import MainTitle from './mainTitle';
import {Cardbox} from '../../style/cardWrapStyle';


const CardWrap = () => {
  let dragging = false;
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: false,
        // autoplaySpeed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        beforeChange: () => dragging = true,
      afterChange: () => dragging = false,
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


    return (
        <>
            
            <Cardbox>
                <MainTitle align={false} mainTitle={'내가 듣고싶은 클래스만 묶어서 들을 수 있다?!'} subTitle={'야나두 추천 멤버십'}/>
                
                <Slider {...settings}>
                        {classData &&
                        classData.map((data) => (
                            <div className="card-item-box" key={data.id}>
                                <a>
                                    <p className="class-title">{data.subTitle}<strong>{data.mainTitle}</strong></p>
                                    <div className="class-price-box">
                                        <span>{data.price}</span>
                                        <p>{data.discountRate}%<em>{data.totalPrice}</em></p>
                                    </div>
                                </a>
                           </div>
                        ))   
                        }
                  
                </Slider>
                
                
            </Cardbox>
        </>
    )
}

export default CardWrap;
