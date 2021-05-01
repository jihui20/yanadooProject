import React, { Component } from 'react';
import Nav from '../nav';
import Search from '../search';
import MyMenu from '../myMenu';
import Basket from '../../contents/basket';
import {HeaderBox, HeaderMenu, MobileMenu} from '../../../style/headerStyle';



class Header extends Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.state= {
            headerSticky: false,
            scrollTop: '',
            mobileMenu: false
        }
    }

    handleScroll = (e) => {
        // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌, 
        //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        this.setState({ scrollTop });
      };

      handleShow = () => {
        this.setState({
            mobileMenu: !this.state.mobileMenu
        })
    }

      

    render() {
        console.log(this.state.mobileMenu);
        return (
            <HeaderBox>
                <div className="inner-col">
                    <h1 className="logo"><a href="#!"><img src="https://english.yanadoocdn.com/upload/yanadoo/pc/common/logo/logo_ynd_136x38_v2.png" alt="logo" /></a></h1>
                    <HeaderMenu showMenu={this.state.mobileMenu}>
                        <Nav />
                        <ul className="right-menu-box">
                            <li><Search /></li>
                            <li><p className="user-name"><span>이지희</span> 회원님</p></li>
                            <li><MyMenu /></li>
                            <li><Basket /></li>
                        </ul>
                    </HeaderMenu>
                    <MobileMenu type="button" onClick={this.handleShow}><span>메뉴</span></MobileMenu>
                </div>
            </HeaderBox>
        );
    }
}

export default Header;