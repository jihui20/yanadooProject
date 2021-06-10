
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Mypage from './eventList';
import Example from '../../images/img_event_test.png';
import ShareItem from './shareItem';


function EventReply() {

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
        <Router>
            <section className="list-title-col">
                <div className="inner-col">
                    <div className="title-area">
                        <p>이벤트</p>
                        
                    <ul>
                        <li className="active" data-tab="tab1">
                            {/* <a href="#;" className="tab-item">진행중 이벤트</a> */}
                            <Link to='/Mypage' className="tab-item">진행중 이벤트</Link>
                        </li>
                        <li className="" data-tab="tab2">
                            <a href="#;" className="tab-item">종료된 이벤트</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>
            <Switch>
                <Route path='/mypage' component={Mypage} />
            </Switch>
            <section className="list-col list-detail">
                <div className="inner-col">
                    <div className="list-detail-title">
                        <div className="title-share-area">
                            <p>야나두x와디즈 최초 공개!<br/>진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!</p>
                            {/* 컴포넌트 */}
                            <ShareItem />
                        </div>
                        <div className="detail-info-area">
                            <p className="dday"><em>100</em></p>
                            <p className="period">21.04.12(월) ~ 21.04.18(일)</p>
                            <p className="end-date">21.04.12(월)</p>
                            <p className="share"><span className="blind">공유하기</span></p>
                        </div>
                    </div>
                </div>
            </section>  
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
                    <div className="participate-type reply">
                        <div className="participate-area">
                            <p>댓글 이벤트 참여<span>52</span></p>
                            <button type="button" className="btn btn-register"><span>등록하기</span></button>
                            <textarea className="reply-box" placeholder="댓글을 입력해주세요."></textarea>
                        </div>
                        <div className="participate-list">
                            <ul>
                                {/* 컴포넌트 */}
                                <li>
                                    <dl>
                                        <dt style={{backgroundImage:"url(https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png)"}}><span className="blind">프로필 이미지</span></dt>
                                        <dd>
                                            <p><strong>김*주</strong></p>
                                            <p><span>21.02.28</span><span>16:43:21</span></p>
                                        </dd>
                                    </dl>
                                    <p>
                                        <span>원래 댓글을 정말 안다는 성격인데 저도 모르게 댓글을 달고 있네요~~ 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요! 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요!</span>
                                    </p>
                                </li>
                                <li>
                                    <dl>
                                        <dt style={{backgroundImage:"url(https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png)"}}><span className="blind">프로필 이미지</span></dt>
                                        <dd>
                                            <p><strong>김*주</strong></p>
                                            <p><span>21.02.28</span><span>16:43:21</span></p>
                                        </dd>
                                    </dl>
                                    <p>
                                        <span>원래 댓글을 정말 안다는 성격인데 저도 모르게 댓글을 달고 있네요~~ 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요! 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요!</span>
                                    </p>
                                </li>
                                <li>
                                    <dl>
                                        <dt style={{backgroundImage:"url(https://english.yanadoocdn.com/upload/yanadoo/pc/sub/beforeAfter/2021/img_media_thumb_kkb.png)"}}><span className="blind">프로필 이미지</span></dt>
                                        <dd>
                                            <p><strong>김*주</strong></p>
                                            <p><span>21.02.28</span><span>16:43:21</span></p>
                                        </dd>
                                    </dl>
                                    <p>
                                        <span>원래 댓글을 정말 안다는 성격인데 저도 모르게 댓글을 달고 있네요~~ 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요! 친구가 알려줘서 참여하게 되었는데 너무너무 당첨되고 싶네요!</span>
                                    </p>
                                </li>
                            </ul>
                            <div className="list-more-box">
                                <button type="button" className="btn btn-more"><span>더보기</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="list-btn-col">
                <div className="inner-col">
                    <button type="button" className="btn btn-go-list">목록보기</button>
                </div>
            </section>
            </Router>
        </>
    )
}

export default EventReply;