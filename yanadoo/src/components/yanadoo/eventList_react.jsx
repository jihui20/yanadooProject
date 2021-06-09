import React, { Component } from 'react';
import EventListItem from './eventListItem';

let index = 0;

class EventList extends Component {
  state = {
    tabClick: true,
    items: [],
    list: [
        {
            id: 1,
            title: '야나두x와디즈 최초 공개! 진짜 현업에서 쓰는 야나두 비즈니스 응급 키트! 4월 한달동안만 진행!',
            dDay: '4',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 2,
            title: '진짜 현업에서 쓰는 야나두 비즈니스 응급 키트!',
            dDay: '66',period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: true
        },
        {
            id: 3,
            title: '4월 한달동안만 진행!',
            dDay: '100',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 4,
            title: '야나두x와디즈 최초 공개!',
            dDay: '78',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        }
        ,
        {
            id: 5,
            title: '4월 한달동안만 진행!',
            dDay: '100',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        },
        {
            id: 6,
            title: '야나두x와디즈 최초 공개!',
            dDay: '78',
            period: '21.04.12(월) ~ 21.04.18(일)',
            announcement: '21.04.25(월)',
            detailBtn: false
        }
    ]
  }

  componentDidMount() {
    this.addList();

    const script = document.createElement("script");

    script.src = "../../script/common.js";
    script.async = true;

    document.body.appendChild(script);
  }


  addList = () => {
    let items = [];
    for(let i = 0; i <5; i++) {
        items[i] = this.state.list[i];
    }
    this.setState({ items: [ ...this.state.items, ...items ]});
    // index++;
    console.log(items)
  }

  render() {
    const { items } = this.state;
    return (
        <section className="list-col">
           <div className="inner-col">
               <div className="list-title">
                   <p>이벤트</p>
                   <ul>
                       <li className={this.state.tabClick ? 'active' : ''} data-tab="tab1">
                           <a href="#;" className="tab-item" onClick={() => {this.setState({tabClick: true})}}>진행중 이벤트</a>
                       </li>
                       <li className={this.state.tabClick ? '' : 'active'} data-tab="tab2">
                           <a href="#;" className="tab-item" onClick={() => {this.setState({tabClick: false})}}>종료된 이벤트</a>
                       </li>
                   </ul>
               </div>
               <div className="list-box">
                   <ul id={this.state.tabClick ? 'tab1' : 'tab2'} className={this.state.tabClick ? 'tab-content progress-event active' : 'tab-content end-event active'}>
                   {items && items.map((item, i) => <EventListItem key={i} item={item} idx={i} ></EventListItem>)}
                   </ul>
                   {/* <ul id="tab1" className="tab-content progress-event active">
                   {
                       this.state.list.map(eventlist => (
                           <EventListItem key={eventlist.id} eventlist={eventlist}/>
                       ))
                   }
                   </ul>
                   <ul id="tab2" className="tab-content end-event">
                   {
                       this.state.list.map(eventlist => (
                           <EventListItem key={eventlist.id} eventlist={eventlist}/>
                       ))
                   }
                   </ul>  */}
                   <div className="list-more-box">
                       <ul className="pagination">
                           <li className="prev disabled"><a href="#;"><span className="blind">prev</span></a></li>
                           <li className="active"><a href="#;"><span>1</span></a></li>
                           <li><a href="#;"><span>2</span></a></li>
                           <li className="next"><a href="#;"><span className="blind">next</span></a></li>
                       </ul>
                       <button type="button" className="btn btn-more" onClick={this.addList}><span>더보기</span></button>
                   </div>
               </div>
           </div>
       </section>
    );
  }
}

export default EventList;