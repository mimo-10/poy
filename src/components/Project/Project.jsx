import React from 'react'
import { useParams } from 'react-router-dom';
import {IoMdReturnLeft} from "react-icons/io";
import {TbShovel} from "react-icons/tb";
import { Link } from 'react-router-dom';
import {MdOutlineLink} from "react-icons/md"
import "./project.css"
import Footer from '../Footer /Footer';
import { connect } from 'react-redux';

const Project = ({data}) => {
  const {projectId} = useParams() 
  const project =  data.works[parseInt(projectId)];
  const imgs = project[4].map((img, index)=> {
      return(
          <div className='img__card'>
              <img src={img} alt="" />
          </div>
      )
  })
  return (
    <div className='project container'>
        <Link to="/" className='projcet__return'>
            <IoMdReturnLeft />
        </Link>
        <div className='project__info'>
            <div className='project__info-logo'>
                <div className='logo'>
                    <TbShovel />
                </div>
            </div>
            <h1 className='project__info-h1'>
                {project[0]}
            </h1>
            <h4 className='project__info-h4'>
                {project[1]}
            </h4>
            <p className='project__info-p'>
                {project[3]}
            </p>
            <p className='project__info-url'>
                <MdOutlineLink />
                <a href="https://google.com/" className='url'> 
                    https://www.poy.com
                </a>
            </p>
            <div className='project__imgs'>
                {imgs}
            </div>
            <div className='project__btns'>
                <Link className='works__add linkkk' to="/">
                    back
                </Link>
                <Link className='works__add' to={`/edit/${projectId}`}>
                    edit this project
                </Link>
            </div>
            <Footer />
        </div>
    </div>
  )
}

function mapStateToProps(state) {
    return {
        data: state
    }
}

export default connect(mapStateToProps)(Project)