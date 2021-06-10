
import React, { useState } from 'react';
import Example from '../../images/img_event_test.png';
import EventDetailTitle from './eventDetailTitle';
import EventType from './eventType';


function EventForm() {
    const [eventState, setEventState] = useState('progress')
    const [eventType, setEventType] = useState('write');
    const [reviewList, setReviewList] = useState([
        {
            id: 1,
            profileThumb: 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png',
            name: '김별별',
            date: '21.02.28',
            time: '16:43:21',
            reply: '원래 댓글을 정말 안다는 성격인데 저도 모르게 댓글을 달고 있네요~~ 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요!원래 댓글을 정말 안다는 성격인데 저도 모르게 댓글을 달고 있네요~~ 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요!원래 댓글을 정말 안다는 성격인데 저도 모르게 댓글을 달고 있네요~~ 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요!원래 댓글을 정말 안다는 성격인데 저도 모르게 댓글을 달고 있네요~~ 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요!',
            reviewImg: ['https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png', 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kyj.png']
        },
        {
            id: 2,
            profileThumb: 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kyj.png',
            name: '김별별',
            date: '21.02.28',
            time: '16:43:21',
            reply: '2번째 댓글',
            reviewImg: ['https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png', 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kyj.png']
        },
        {
            id: 3,
            profileThumb: 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_yjh_interview.png',
            name: '김별별',
            date: '21.02.28',
            time: '13:13:13',
            reply: '3번째 댓글',
            reviewImg: ['https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png', 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kyj.png']
        },
        {
            id: 4,
            profileThumb: 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_ly.png',
            name: '김별별',
            date: '21.02.28',
            time: '14:14:14',
            reply: '4번째 댓글',
            reviewImg: ['https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png', 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kyj.png']
        }
        ,
        {
            id: 5,
            profileThumb: 'https://english.yanadoocdn.com/upload/yanadoo/pc/landing/hotranking/img_thumb_audio_pc_v2.jpg',
            name: '김별별',
            date: '21.02.28',
            time: '15:15:15',
            reply: '5번째 댓글',
            reviewImg: ['https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png', 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kyj.png']
        },
        {
            id: 6,
            profileThumb: 'https://english.yanadoocdn.com/upload/yanadoo/pc/landing/nevergiveup/2021/june/img_hotranking_6month_pc.jpg',
            name: '김별별',
            date: '21.02.28',
            time: '16:16:16',
            reply: '6번째 댓글',
            reviewImg: ['https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png', 'https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kyj.png']
        }
    ]);

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
                    <EventType reviewList={reviewList} eventType={eventType} />
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