import React, { useState } from 'react';


function ShareItem() {
    
    return (
        <ul className="share-item">
            <li className="instagram"><a href="#;"><span className="blind">instagram</span></a></li>
            <li className="kakaotalk"><a href="#;"><span className="blind">kakaotalk</span></a></li>
            <li className="facebook"><a href="#;"><span className="blind">facebook</span></a></li>
            <li className="kakaostory"><a href="#;"><span className="blind">kakaostory</span></a></li>
            <li className="band"><a href="#;"><span className="blind">band</span></a></li>
            <li className="url"><a href="#;"><span className="blind">copy url</span></a></li>
        </ul>
    )
}

export default ShareItem;