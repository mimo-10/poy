import React from 'react'
import "./work.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Work = ({dt}) => {
    const works = dt.works.map((work, index)=> {
    return (
      <Link key={index} className="works__link" to={`/works/${index}`}>
      <div className="works__card" >
        <img className="work__img" src={work[4][0]} alt=''/>
        <div  className='works__card-info'>
          <h3 className='works__card-h3'>
            {work[0]}
          </h3>
          <p className='works__card-p'>
            {work[1]}
          </p>
        </div>
        <p className='works__card-rating'>
          {work[2]}
        </p>
      </div>
      </Link>
      )
    })
  return (
    <div className='works'>
      <div className='works__list'>
        {works}
      </div>
      <div className='add'>
        <Link className='works__add' to="/add_project">
          add project
        </Link>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return ({
    dt: state
  }
  )
}

export default connect(mapStateToProps)(Work);