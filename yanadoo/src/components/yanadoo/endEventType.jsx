

import React, { useState } from 'react';

function EndEventType(props) {
    const [btnToggle, setBtnToggle] = useState(false);

    function listToggle() {
        setBtnToggle(!btnToggle);
    }

    return (
        <div className="winner-result-area">
            <button type="button" className="btn btn-my-result"><span>나의 당첨 결과 확인</span></button>
            <div className="winner-list">
                <button type="button" className={'btn btn-all-result ' + (btnToggle ? 'active' : '')} onClick={listToggle}><span>당첨자 전체보기</span></button>
                <div className={btnToggle ? 'active' : ''}>
                    <em>이름과 핸드폰번호 뒷자리로 당첨 여부를 확인하세요.</em>
                    <ul>
                        <li>박*나<span>3509</span></li>
                        <li>이*연<span>1070</span></li>
                        <li>김*혜<span>7777</span></li>
                        <li>송*녕<span>0479</span></li>
                        <li>이*림<span>1534</span></li>
                        <li>박*나<span>3509</span></li>
                        <li>이*연<span>1070</span></li>
                        <li>김*혜<span>7777</span></li>
                        <li>송*녕<span>0479</span></li>
                        <li>이*림<span>1534</span></li>
                        <li>박*나<span>3509</span></li>
                        <li>이*연<span>1070</span></li>
                        <li>김*혜<span>7777</span></li>
                        <li>송*녕<span>0479</span></li>
                        <li>이*림<span>1534</span></li>
                        <li>박*나<span>3509</span></li>
                        <li>이*연<span>1070</span></li>
                        <li>김*혜<span>7777</span></li>
                        <li>송*녕<span>0479</span></li>
                        <li>이*림<span>1534</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EndEventType;