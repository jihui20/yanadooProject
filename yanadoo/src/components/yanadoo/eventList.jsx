import React, { useState, useEffect } from 'react';
import EventListItem from './eventListItem';

function EventList() {
    const [pageIndex, setPageIndex] = useState(0);
    const [tabMenu, setTabMenu] = useState(1);
    const [listItems, setListItems] = useState([]);
    const [list, setList] = useState([
        {
            id: 1,
            title: '1번째 리스트 야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트! 4월 한달동안만 진행!',
            dDay: '4',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 2,
            title: '2번째 리스트',
            dDay: '66',period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: true
        },
        {
            id: 3,
            title: '3번째 리스트',
            dDay: '100',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 4,
            title: '4번째 리스트',
            dDay: '78',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        }
        ,
        {
            id: 5,
            title: '5번째 리스트',
            dDay: '100',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 6,
            title: '6번째 리스트',
            dDay: '78',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 7,
            title: '7번째 리스트',
            dDay: '4',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 8,
            title: '8번째 리스트',
            dDay: '66',period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: true
        },
        {
            id: 9,
            title: '9번째 리스트',
            dDay: '100',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 10,
            title: '10번째 리스트',
            dDay: '78',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        }
        ,
        {
            id: 11,
            title: '11번째 리스트',
            dDay: '100',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 12,
            title: '12번째 리스트',
            dDay: '78',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        }
    ]);

    function addList() {
        let items = [];
        for(let i = 0; i <5; i++) {
            items[i] = list[i];
        }
        setListItems([ ...listItems, ...items]);
        setPageIndex(pageIndex + 1);
        // index++;
        // console.log(items)
    }
        
    useEffect(() => {
        addList();  
    }, []);

   function handleShow(id) {
       setTabMenu(id);
       
        // const tabItem = document.querySelectorAll('.tab-item');
        // const tabContent = document.querySelectorAll('.tab-content');
    
        //   const tabTarget = e.currentTarget.parentNode;
        //   const tabData = tabTarget.dataset.tab;
        
        //   Array.prototype.forEach.call(tabItem, function(e) {
        //     e.parentNode.classList.remove('active');
        //   });
        
        //   Array.prototype.forEach.call(tabContent, function(e) {
        //     e.classList.remove('active');
        //   });
        
        //   tabTarget.classList.add('active');
        //   document.querySelector('#' + tabData).classList.add('active');

      }
    
    return (
        <>
            <section className="list-title-col">
                <div className="inner-col">
                    <div className="title-area">
                        <p>이벤트</p>
                    <ul>
                        <li className={(tabMenu === 1 ? 'active' : '')} data-tab="tab1">
                            <a href="#;" className="tab-item" onClick={() => handleShow(1)}>진행중 이벤트</a>
                        </li>
                        <li className={(tabMenu === 2 ? 'active' : '')} data-tab="tab2">
                            <a href="#;" className="tab-item" onClick={() => handleShow(2)}>종료된 이벤트</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </section>
            <section className="list-col list">
            <div className="inner-col">
                <div className="list-box">
                    <ul id="tab1" className={'tab-content progress-event ' + (tabMenu === 1 ? 'active' : '')}>
                    {listItems && listItems.map((item, idx) => <EventListItem key={idx} item={item} idx={idx} />)}
                    </ul>
                    <ul id="tab2" className={'tab-content end-event ' + (tabMenu === 2 ? 'active' : '')}>
                    {listItems && listItems.map((item, idx) => <EventListItem key={idx} item={item} idx={idx} />)}
                    </ul>
                    <div className="list-more-box">
                        <ul className="pagination">
                            <li className="prev disabled"><a href="#;"><span className="blind">prev</span></a></li>
                            <li className="active"><a href="#;"><span>1</span></a></li>
                            <li><a href="#;"><span>2</span></a></li>
                            <li className="next"><a href="#;"><span className="blind">next</span></a></li>
                        </ul>
                        <button type="button" className="btn btn-more" onClick={addList}><span>더보기</span></button>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default EventList;