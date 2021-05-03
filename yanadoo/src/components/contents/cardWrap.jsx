import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'; 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; 
import 'swiper/components/pagination/pagination.scss'; 
import 'swiper/components/scrollbar/scrollbar.scss'; 
import classData from '../../data/classData.json';
import MainTitle from './mainTitle';
import {Cardbox} from '../../style/cardWrapStyle';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CardWrap = () => {
  
    return (
        <>
            
            <Cardbox>
                <MainTitle mainTitle={'내가 듣고싶은 클래스만 묶어서 들을 수 있다?!'} subTitle={'야나두 추천 멤버십'}/>
                <Swiper
                    className='swiper-container swiper-test'
                    spaceBetween={25}
                    slidesPerView={1}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      960: {
                        slidesPerView: 2,
                      },
                    }}
                  >
                  {classData &&
                        classData.map((data) => (
                            <SwiperSlide className="card-item-box" key={data.id}>
                                <a href="#!">
                                    <p className="class-title">{data.subTitle}<strong>{data.mainTitle}</strong></p>
                                    <div className="class-price-box">
                                        <span>{data.price}</span>
                                        <p>{data.discountRate}%<em>{data.totalPrice}</em></p>
                                    </div>
                                </a>
                           </SwiperSlide>
                        ))   
                    } 
              </Swiper>
                
            </Cardbox>
        </>
    )
}

export default CardWrap;
