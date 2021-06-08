import React, { Component } from 'react';
import Example from '../../images/img_bnr_test.png';


class EventListItem extends Component {

  render() {
    const eventList = this.props.eventlist;
    console.log(eventList)
    return (
      <li>
        <a href="#;">
            <div className="list-thumb">
                <em>{eventList.dDay}</em>
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
    )
  }
}

export default EventListItem;