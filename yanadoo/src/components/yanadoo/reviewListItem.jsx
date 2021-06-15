

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'; 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; 
import 'swiper/components/pagination/pagination.scss'; 
import 'swiper/components/scrollbar/scrollbar.scss'; 

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ReviewListItem = React.memo(({list, type}) => {

    return (
        <li>
            <dl>
                <dt style={{backgroundImage:`url(`+ list.profileThumb +`)`}}><span className="blind">프로필 이미지</span></dt>
                <dd>
                    <p><strong>{list.name}</strong></p>
                    <p><span>{list.date}</span><span>{list.time}</span></p>
                </dd>
            </dl>
            
            {
                (function(){
                    if(type === 'write')
                    return (
                        <div>
                            <Swiper
                                    className='swiper-container swiper-review'
                                    spaceBetween={5}
                                    pagination={{ clickable: true }}

                                >
                                    {list.reviewImg &&
                                        list.reviewImg.map((item, idx) => (
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
                <em>{list.reply}</em>
            </p>
        </li>
    )
});

export default ReviewListItem;