

import React, { useState } from 'react';
import ReviewListItem from './reviewListItem';

function ProgressEventType(props) {
    return (
        <div className={'participate-type ' + props.eventType}>
            <div className="participate-area">
                <p>
                    {
                        (function(){
                            if(props.eventType === 'write')
                            return '작성 이벤트 참여';

                            if(props.eventType === 'reply')
                            return '댓글 이벤트 참여';
                        })()
                    }
                    <span>52</span>
                </p>
                <button type="button" className="btn btn-register"><span>등록하기</span></button>
                <div className="reply-box">
                    <textarea placeholder="댓글을 입력해주세요."></textarea>
                </div>
            </div>
            <div className="participate-list">
                <ul>
                    {props.reviewList 
                        && props.reviewList.map((list, idx) => 
                        <ReviewListItem key={idx} list={list} idx={idx} type={props.eventType} />
                        )
                    }
                </ul>
                <div className="list-more-box">
                    <button type="button" className="btn btn-more"><span>더보기</span></button>
                </div>
            </div>
        </div>
    )
}

export default ProgressEventType;