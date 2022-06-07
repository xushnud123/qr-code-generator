import React, { useEffect, useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import './sidebar.scss'

const Sidebar = ({item}) => {
    const [value,setValue]= useState('')
    const [data,setData] = useState(item)
    const filtered =
      value !== ""
        ? data.filter((item) =>
            item.data.toLowerCase().includes(value.toLowerCase())
          )
        : data;
    return (
      <div className="sidebar">
        <div className="row">
          <div className="search">
            <input
              type="search"
              placeholder="Search QR codes..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span>
              <AiOutlineSearch />
            </span>
          </div>
          <ul>
          {filtered.map((dt,index) => {
            return <li key={index}>{index + 1 }) {dt.data}</li>;
          })}
          </ul>
        </div>
      </div>
    );
}
 
export default Sidebar;