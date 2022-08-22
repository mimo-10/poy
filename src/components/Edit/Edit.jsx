import "./edit.css";
import SubHeader from '../../subcomponents/SubHeader';
import {BiPen} from "react-icons/bi";
import { connect } from 'react-redux';
import action from '../../actions';
import { Link, useParams } from 'react-router-dom';
import {AiFillDelete} from "react-icons/ai";
import {MdEdit} from "react-icons/md";
import Footer from '../Footer /Footer';
import { useState, useEffect } from 'react';
import { updateData } from "../../constants/data";
import React from "react";
import EditImg from "./EditImg/EditImg";

const Edit = ({dt, action, st}) => {
  const [sty, setsty] = useState(false)
  const {editId} = useParams()
  const [editimg, seteditimg] = useState({
    state:false,
    id: null,
  })
  const [project, setproject] = React.useState(dt[parseInt(editId)])
  const [imgs, setimgs] = useState(true);
  const images = project[4].map((img, index)=> {
    return(
      <div key={index} className='edit__imgs_img'>
        <img src={img} alt="" />
        <p className='caption'>
          CAption
        </p>
        <div>
          <MdEdit className='edit_img' onClick={()=>editImg(index)}/>
          <AiFillDelete className='del_img' onClick={()=>deleteImg(index)}/>
        </div>
        
      </div>
    )
  })
  function change(event, inx) {
    setproject((prevState)=> {
      return (prevState.map((info, index)=> {
        if (parseInt(inx) === index ) {
          return (event.target.value)
        } else {
          return info
        }
      }))
    })
  }
  useEffect(function() {
    action({
      inx: +editId,
      dt: project
    })
  }, [project, editId, action])
  function updateDt() {
    setsty(true)
    updateData(st)
  }
  function deleteImg(id){
    setproject((prevState)=> {
      const newState = prevState;
      newState[4].splice(id, 1);
      return(newState)
    })
    setimgs(prevState => !prevState)
  }
  console.log(dt)
  function editImg(id) {
    seteditimg({
        state: true,
        id: id
      })
  }
  function changeUrl(value, id) {
    setproject((prevState)=> {
      const newState = prevState;
      newState[4][id] = value;
      return(newState)
    })
  }
  return (
    <div className='edit'>
      <EditImg close={()=> {seteditimg((prevState) => {return ({state: false, id: prevState.id})})}} edit={changeUrl} project={project} style={{display: editimg.state ? "grid" : "none"}} id={editimg.id} />
      <SubHeader icon={<BiPen className='icon_sub' />} path="/" title="edit project" admin="Site Admin" />
      <div className='form'>
        <div className='input'>
          <label htmlFor='title'>
            project title
          </label>
          <input inx="0" value={project[0]} id='title' placeholder='Title' onChange={(event)=>change(event, "0")}/>
        </div>
        <div className='input'>
          <label htmlFor='Description'>
            Short Description
          </label>
          <input inx="1" value={project[1]} id='Description' placeholder='Description' onChange={(event)=>change(event, "1")}/>
        </div>
        <div className='input'>
          <label htmlFor='long_Description'>
            Long Description
          </label>
          <textarea inx="3" value={project[3]} id='long_Description' placeholder='Long Description' onChange={(event)=>change(event,"3")}/>
        </div>
        <div className='images'>
          <h2 className='images-h2'>
            images
          </h2>
          <button className='images-btn'>
            add image
          </button>
          <div className='edit__imgs'>
            {(project[4].length !==0) ? images : 
            <p className="empty"> there is no images</p>}
          </div>
        </div>
        <h3 style={{display: sty ? "grid" : "none"}} className="done_event">
          files updated...
        </h3>
        <button className='done' onClick={updateDt}>
          Done
        </button>
        <Link to={`/delete/${editId}`} >
          <button className='delete'>
            delete project?
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

const mapDispatchToProps = {
  action
}

function mapStatateToProps(state){
  return {
    dt: state.works,
    st: state
  }
}


export default connect(mapStatateToProps, mapDispatchToProps)(Edit)