import React, { useState } from 'react';

let navList = [
    {
        id: 1,
        mainNav: '네비1',
        subNav: [
            '서브1네비1이쥬', '서브1네비2이쥬', '서브1네비3이쥬'
        ]
    },
    {
        id: 2,
        mainNav: '네비2',
        subNav: [
            '서브2네비1이쥬', '서브2네비2이쥬', '서브2네비3이쥬'
        ]
    },
    {
        id: 3,
        mainNav: '네비3',
        subNav: [
            '서브3네비1이쥬', '서브3네비2이쥬', '서브3네비3이쥬'
        ]
    }
]

const Nav = () => {
    let [navHover, setNavHover] = useState(false);

    return (
        <ul className="main-nav-box">
            {
                navList.map((mainNav, idx) => (
                    <li key={mainNav.id}>
                        <a href="#" onMouseOver={() => {setNavHover(true)}} onMouseLeave={() => {setNavHover(false)}}>{mainNav.mainNav}</a>
                        <ul  className={navHover === true  ? 'sub-nav-box active' : 'sub-nav-box'}>
                           {
                               mainNav.subNav.map((subNav, idx) => (
                                   <li key={idx}>
                                       <a href="#">{subNav}</a>
                                   </li>
                                  
                               ))
                           }
                        </ul>
                    </li>
                ))
            }
        </ul>
    )
}

export default Nav;