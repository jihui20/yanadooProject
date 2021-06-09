import React, { Component } from 'react';
import Example from '../../images/img_bnr_test.png';


class EventListItem extends Component {
    shouldComponentUpdate(nextProps) {
        return JSON.stringify(this.props) !== JSON.stringify(nextProps)
    }

    render() {
        const eventList = this.props.item;
        return (
          <li>
             <a href="#;">
                 <div className="list-thumb">
                     <em>{this.props.idx + 1}</em>
                     <div className="button-box">
                         <button type="button" className="btn btn-detail"><span>내용보기</span></button>
                         <button type="button" className="btn btn-winner"><span>당첨자 확인</span></button>
                     </div>
                     <img src={Example} alt="" />
                 </div>
                 <div className="list-desc">
                     <p><strong>{eventList.title}</strong></p>
                     <p className="list-period">{eventList.period}</p>
                     <p className="list-announcement">{eventList.announcement}</p>
                 </div>
             </a>
         </li>
        );
    }
}

export default EventListItem;