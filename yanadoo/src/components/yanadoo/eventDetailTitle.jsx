

import React, { useState } from 'react';
import ShareItem from './shareItem';
import EventModal from './eventModal';

function EventDetailTitle({eventState}) {
    const [modalActive, setModalActive] = useState(false);

    function showModal() {
        setModalActive(true);
    }   

    function hideModal() {
        setModalActive(false)
    }

    return (
        <>
            <section className={'detail-title-col ' + eventState}>
                <div className="inner-col">
                    <div className="list-detail-title">
                        <div className="title-share-area">
                            <p className="ellipsis line-clamp-2">야나두x와디즈 최초 공개!<br/>진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!</p>
                            <ShareItem />
                        </div>
                        <div className="detail-info-area">
                            <p className="dday"><em>100</em></p>
                            <p className="period">21.04.12(월) ~ 21.04.18(일)</p>
                            <p className="end-date">21.04.12(월)</p>
                            <button type="button" className="btn btn-go-event">해당 이벤트 보기</button>
                            <button type="button" className="btn btn-share" onClick={showModal}><span className="blind">공유하기</span></button>
                        </div>
                    </div>
                </div>
            </section> 
            <EventModal hide={hideModal} show={modalActive}/>
        </>
    )
}

export default EventDetailTitle;