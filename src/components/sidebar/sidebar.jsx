import React, { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import './sidebar.scss'

const Sidebar = () => {
    const [value,setValue]= useState('')
    return ( <div className='sidebar'>
        <div className="row">
            <div className="search">
                <input type="search" placeholder='Search QR codes...' value={value} onChange={(e) => setValue(e.target.value)}/>
                <span><AiOutlineSearch/></span>
            </div>
        </div>
    </div> );
}
 
export default Sidebar;