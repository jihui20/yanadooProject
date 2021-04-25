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

let subList = [
    {
        sub1: [
            {id: 1, desc: 'All jobs 서브1'},
            {id: 2, desc: 'All jobs 서브2'},
            {id: 3, desc: 'All jobs 서브3'},
            {id: 4, desc: 'All jobs 서브4'},
        ],
        sub2: [
            {id: 1, desc: 'Events 서브1'},
            {id: 2, desc: 'Events 서브2'},
            {id: 3, desc: 'Events 서브3'},
            {id: 4, desc: 'Events 서브4'},
        ],
        sub3: [
            {id: 1, desc: 'Resume 서브1'},
            {id: 2, desc: 'Resume 서브2'},
            {id: 3, desc: 'Resume 서브3'},
            {id: 4, desc: 'Resume 서브4'},
        ],
        sub4: [
            {id: 1, desc: 'MathUp 서브1'},
            {id: 2, desc: 'MathUp 서브2'},
            {id: 3, desc: 'MathUp 서브3'},
            {id: 4, desc: 'MathUp 서브4'},
        ]
    }
]

const Nav = () => {
    const [navHover, setNavHover] = useState(false);
    
    return (
        <nav className="nav-box">
            <ul className="main-nav-box">
            {/* {
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
            } */}

            {
                navList.map(mainNav => (
                    <li key={mainNav.id}>
                        <a href="#!" onMouseEnter={() => {setNavHover(true)}} onMouseLeave={() => {setNavHover(false)}}>{mainNav.mainNav}</a>
                        <ul  className={navHover === true  ? 'sub-nav-box active' : 'sub-nav-box'}>
                           {
                               subList.map((subNav, idx) => (
                                //    console.log(subNav)
                                
                                   subNav.sub2.map(subList => (
                                    <li key={subList.id}>
                                       <a href="#!">{subList.desc}</a>
                                   </li>
                                   ))
                                  
                               ))
                           }
                        </ul>
                    </li>
                ))
            }
        </ul>
        </nav>
    )
}

export default Nav;