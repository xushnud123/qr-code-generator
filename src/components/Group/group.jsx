import React, { useState } from 'react'
import './group.scss'
const Group = ({open}) => {
    
    return ( <div className='wrapper'>
            <div className={open ? "sidebar active" : 'sidebar'}></div>
            <div className={open ? "lists act" : 'lists'}>
    
            </div>
    </div> );
}
 
export default Group;