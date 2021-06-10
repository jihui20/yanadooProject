

import React, { useState } from 'react';
import Example from '../../images/img_bnr_test.png';

const EventListItem = React.memo((props) => {
    // console.log('render')
    return (
        <li>
             <a href="#;">
                 <div className="list-thumb">
                     <em>{props.idx + 1}</em>
                     <div className="button-box">
                         <button type="button" className="btn btn-detail"><span>내용보기</span></button>
                         <button type="button" className="btn btn-winner"><span>당첨자 확인</span></button>
                     </div>
                     <img src={Example} alt="" />
                 </div>
                 <div className="list-desc">
                     <p><strong>{props.item.title}</strong></p>
                     <p className="list-period">{props.item.period}</p>
                     <p className="list-announcement">{props.item.announcement}</p>
                 </div>
             </a>
         </li>
    )
});

export default EventListItem;