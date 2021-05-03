import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'; 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; 
import 'swiper/components/pagination/pagination.scss'; 
import 'swiper/components/scrollbar/scrollbar.scss'; 
import styled from 'styled-components';
import classData from '../../data/classData.json';
import MainTitle from './mainTitle';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ClassBoxS = styled.div`
  width:100%;
  max-width:1200px;
  margin:0 auto;
  border:1px solid green;
`

const BestClassWrap = () => {
    return (
        <>
            <ClassBoxS>
                <MainTitle alignStyle={'left'} mainTitle={'가장 호응이 좋았던!'} subTitle={'Top10 클래스'}/>
                <Swiper
                    className='swiper-container swiper-test'
                    slidesPerView={1}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                      },
                      960: {
                        slidesPerView: 3,
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
                
            </ClassBoxS>
        </>
    )
}

export default BestClassWrap;
