

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'; 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; 
import 'swiper/components/pagination/pagination.scss'; 
import 'swiper/components/scrollbar/scrollbar.scss'; 

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ReviewListItem = React.memo((props) => {
    const reviewImg = props.list.reviewImg;

    // console.log(props.type);
    return (
        <li>
            <dl>
                <dt style={{backgroundImage:`url(`+ props.list.profileThumb +`)`}}><span className="blind">프로필 이미지</span></dt>
                <dd>
                    <p><strong>{props.list.name}</strong></p>
                    <p><span>{props.list.date}</span><span>{props.list.time}</span></p>
                </dd>
            </dl>
            
            {
                (function(){
                    if(props.type === 'write')
                    return (
                        <div>
                            <Swiper
                                    className='swiper-container swiper-review'
                                    spaceBetween={5}
                                    pagination={{ clickable: true }}

                                >
                                    {reviewImg &&
                                        reviewImg.map((item, idx) => (
                                            <SwiperSlide key={idx}>
                                                <a href="#!">
                                                    <img src={item} alt="" />
                                                </a>
                                        </SwiperSlide>
                                        ))   
                                    }
                            </Swiper>
                        </div>
                    );
                })()
            }
            <p>
                <em>{props.list.reply}</em>
            </p>
        </li>
    )
});

export default ReviewListItem;