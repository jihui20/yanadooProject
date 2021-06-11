
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Example from '../../images/img_event_test.png';
import EndEventType from './endEventType';
import EventDetailTitle from './eventDetailTitle';
import ProgressEventType from './progressEventType';
import listData from '../../data/reviewListData';


function EventForm() {
    const [eventState, setEventState] = useState('end')
    const [eventType, setEventType] = useState('write');
    const [reviewList, setReviewList] = useState([]);

    // function reviewData() {
    //     console.log(listData)
    //     axios
    //         .get(listData)
    //         .then(({data}) => {
    //             setReviewList(data);
    //             console.log(data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         })
    // }

    // useEffect(() => {
    //     reviewData();  
    // }, []);

    const handleShow = (e) => {
        const tabItem = document.querySelectorAll('.tab-item');
        const tabContent = document.querySelectorAll('.tab-content');

        const tabTarget = e.currentTarget.parentNode;
        const tabData = tabTarget.dataset.tab;

        Array.prototype.forEach.call(tabItem, function(e) {
        e.parentNode.classList.remove('active');
        });

        Array.prototype.forEach.call(tabContent, function(e) {
        e.classList.remove('active');
        });

        tabTarget.classList.add('active');
        document.querySelector('#' + tabData).classList.add('active');
    }

    // console.log(reviewList)
    return (
        <>
            <section className="list-title-col">
                <div className="inner-col">
                    <div className="title-area">
                        <p>이벤트</p>
                        <ul>
                            <li className="active" data-tab="tab1">
                                <a href="#;" className="tab-item">진행중 이벤트</a>
                            </li>
                            <li className="" data-tab="tab2">
                                <a href="#;" className="tab-item">종료된 이벤트</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <EventDetailTitle eventState={eventState} />
            <section className="event-participate-col">
                <div className="inner-col">
                    <div className="event-area">
                        <img src={Example} alt="" />
                        <pre>
원래 리뷰를 정말 안쓰는 성격인데 해빈 PM님 강연을 듣고 커리어에 대한 많은 고민들이 해결되어 너무나 감사한 마음에 리뷰 쓰게 되었습니다.
저는 대기업 주니어 PM으로 매우 적은 인원으로 플랫폼을 구축하고 개선해나가는 PM 역할을 맡게 되었습니다.
나이도 어리고 신입인지라 다른 사람들이 PM으로써 내 의견을 들어줄까? 무시 당하지 않고 PM으로서 당당하게 리딩을 하려면 어떻게 해야할까? 등에 대한 고민이 정말 컸습니다.
                        </pre>
                    </div>
                    {
                        (function(){
                            if(eventState === 'progress')
                            return <ProgressEventType reviewList={listData} eventType={eventType} />;

                            if(eventState === 'end')
                            return <EndEventType eventType={eventType} />;
                        })()
                    }
                </div>
            </section>
            <section className="list-btn-col">
                <div className="inner-col">
                    <button type="button" className="btn btn-go-list">목록보기</button>
                </div>
            </section>
        </>
    )
}

export default EventForm;