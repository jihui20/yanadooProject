import React, { useState, useEffect } from 'react';
import EventListItem from './eventListItem';
import eventListData from '../../data/eventData'

function EventList() {
    const [pageIndex, setPageIndex] = useState(0);
    const [tabMenu, setTabMenu] = useState(1);
    const [listItems, setListItems] = useState([]);
    const [list, setList] = useState([]);

    function addList() {
        let items = [];
        for(let i = 0; i <5; i++) {
            items[i] = eventListData[i];
        }
        setListItems([ ...listItems, ...items]);
        setPageIndex(pageIndex + 1);
        // index++;
        // console.log(items)
    }
        
    useEffect(() => {
        addList();  
    }, []);

   function tabShow(id) {
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
                            <a href="#;" className="tab-item" onClick={() => tabShow(1)}>진행중 이벤트</a>
                        </li>
                        <li className={(tabMenu === 2 ? 'active' : '')} data-tab="tab2">
                            <a href="#;" className="tab-item" onClick={() => tabShow(2)}>종료된 이벤트</a>
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