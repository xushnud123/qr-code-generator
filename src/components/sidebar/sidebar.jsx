import React, { useEffect, useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import './sidebar.scss'

const Sidebar = ({item}) => {
    const [value,setValue]= useState('')
    const [data,setData] = useState(item)
    useEffect(() => {
         const filteredCountries = item.filter((country) => {
           return (
             country.data.toLowerCase().indexOf(value.toLowerCase()) !== -1
           );
         });
         setData(filteredCountries)
    },[value])
    return ( <div className='sidebar'>
        <div className="row">
            <div className="search">
                <input type="search" placeholder='Search QR codes...' value={value} onChange={(e) => setValue(e.target.value)}/>
                <span><AiOutlineSearch/></span>
            </div>
            {/* {
                data.map(i => <p key={i.data}>{i.data}</p>)
            } */}
        </div>
    </div> );
}
 
export default Sidebar;