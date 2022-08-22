import React from 'react'
import {GrFormClose} from "react-icons/gr";
import "./subheader.css";

import { Link } from 'react-router-dom';


const SubHeader = (props) => {
  return (
    <div className='subheader'>
        <Link to={props.path} className='close'>
            <GrFormClose className='close__icon'/>
        </Link>
        {props.icon}
        <div className='admin'>
            {props.admin}
        </div>
        <div className='title'>
            {props.title}
        </div>
    </div>
  )
}

export default SubHeader