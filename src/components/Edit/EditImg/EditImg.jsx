import React from 'react'
import ReactDOM from 'react-dom'
import "./editimg.css";
import {FaWindowClose} from "react-icons/fa";

const EditImg = (props) => {
    function change() {

    }
  return (
    ReactDOM.createPortal(
    <div style={props.style} className='edit-img'>
        <div className='img-container'>
            <FaWindowClose className='close-edit' onClick={props.close} />
            <h4 className='img-h4'>
                Edit image
            </h4>
            <img src={props.project[4][props.id]} alt="" />
            <input className='img-input' value={props.project[4][props.id]} placeholder="url" onChange={change}/>
            <button >
                Save
            </button>
        </div>
    </div>,
    document.getElementById('modal')
    )
  )
}

export default EditImg