

import React, { useState } from 'react';
import ShareItem from './shareItem';

function EventModal(props) {
    const { show, hide } = props;

    return (
        <div className={'modal event-modal ' + (show && 'active')}>
            <div className="modal-content">
                <button type="button" className="btn btn-cancel" onClick={hide}><span className="blind">닫기</span></button>
                <p>이벤트 글을<br/>SNS에 공유해보세요.</p>
                <ShareItem />\
            </div>
        </div>
    )
};

export default EventModal;