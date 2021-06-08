import React, { useState } from 'react';
import Example from '../../images/img_bnr_test.png';



const EventList = () => {
    const [ListItem, setListItem] = useState({
        title: '야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트! 4월 한달동안만 진행!'
    })

    const handleShow = () => {
        const tabItem = document.querySelectorAll('.tab-item');
        const tabContent = document.querySelectorAll('.tab-content');
        
        Array.prototype.forEach.call(tabItem, function(e){
          e.addEventListener('click', tabEvent);
        });
        
        function tabEvent(e) {
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
        
    }

    return (
        <>
            <section className="list-col">
                <div className="inner-col">
                    <div className="list-title">
                        <p>이벤트</p>
                        <ul>
                            <li className="active" data-tab="tab1">
                                <a href="#;" className="tab-item" onClick={handleShow}>진행중 이벤트</a>
                            </li>
                            <li  data-tab="tab2">
                                <a href="#;" className="tab-item" onClick={handleShow}>종료된 이벤트</a>
                            </li>
                        </ul>
                    </div>
                    <div className="list-box">
                        <ul id="tab1" className="tab-content progress-event active">
                            <li>
                                <a href="#;">
                                    <div className="list-thumb">
                                        <em>5</em>
                                        <img src={Example} alt="" />
                                    </div>
                                    <div className="list-desc">
                                        <p><strong>야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!
4월 한달동안만 진행!</strong></p>
                                        <p className="list-period">21.04.12(월) ~ 21.04.18(일)</p>
                                        <p className="list-announcement">21.04.25(월)</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#;">
                                    <div className="list-thumb">
                                        <em>5</em>
                                        <img src={Example} alt="" />
                                    </div>
                                    <div className="list-desc">
                                        <p><strong>야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!
4월 한달동안만 진행!</strong></p>
                                        <p className="list-period">21.04.12(월) ~ 21.04.18(일)</p>
                                        <p className="list-announcement">21.04.25(월)</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#;">
                                    <div className="list-thumb">
                                        <em>78</em>
                                        <img src={Example} alt="" />
                                    </div>
                                    <div className="list-desc">
                                        <p><strong>야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!
4월 한달동안만 진행!</strong></p>
                                        <p className="list-period">21.04.12(월) ~ 21.04.18(일)</p>
                                        <p className="list-announcement">21.04.25(월)</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#;">
                                    <div className="list-thumb">
                                        <em>100</em>
                                        <img src={Example} alt="" />
                                    </div>
                                    <div className="list-desc">
                                        <p><strong>야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!
4월 한달동안만 진행!</strong></p>
                                        <p className="list-period">21.04.12(월) ~ 21.04.18(일)</p>
                                        <p className="list-announcement">21.04.25(월)</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul id="tab2" className="tab-content end-event">
                            <li>
                                <a href="#;">
                                    <div className="list-thumb">
                                        <div className="button-box">
                                            <button type="button" className="btn btn-detail"><span>내용보기</span></button>
                                            <button type="button" className="btn btn-winner"><span>당첨자 확인</span></button>
                                        </div>
                                        <img src={Example} alt="" />
                                    </div>
                                    <div className="list-desc">
                                        <p><strong>야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!
4월 한달동안만 진행!</strong></p>
                                        <p className="list-period">21.04.12(월) ~ 21.04.18(일)</p>
                                        <p className="list-announcement">21.04.25(월)</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#;">
                                    <div className="list-thumb">
                                        <div className="button-box">
                                            <button type="button" className="btn btn-winner"><span>당첨자 확인</span></button>
                                        </div>
                                        <img src={Example} alt="" />
                                    </div>
                                    <div className="list-desc">
                                        <p><strong>야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!
4월 한달동안만 진행!</strong></p>
                                        <p className="list-period">21.04.12(월) ~ 21.04.18(일)</p>
                                        <p className="list-announcement">21.04.25(월)</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#;">
                                    <div className="list-thumb">
                                        <em>78</em>
                                        <img src={Example} alt="" />
                                    </div>
                                    <div className="list-desc">
                                        <p><strong>야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!
4월 한달동안만 진행!</strong></p>
                                        <p className="list-period">21.04.12(월) ~ 21.04.18(일)</p>
                                        <p className="list-announcement">21.04.25(월)</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#;">
                                    <div className="list-thumb">
                                        <em>100</em>
                                        <img src={Example} alt="" />
                                    </div>
                                    <div className="list-desc">
                                        <p><strong>야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!
4월 한달동안만 진행!</strong></p>
                                        <p className="list-period">21.04.12(월) ~ 21.04.18(일)</p>
                                        <p className="list-announcement">21.04.25(월)</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="list-more-box">
                            <ul className="pagination">
                                <li className="prev"><a href="#;"><span className="blind">prev</span></a></li>
                                <li><a href="#;"><span>1</span></a></li>
                                <li><a href="#;"><span>2</span></a></li>
                                <li className="next"><a href="#;"><span className="blind">next</span></a></li>
                            </ul>
                            <button type="button" className="btn btn-more"><span>더보기</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventList;