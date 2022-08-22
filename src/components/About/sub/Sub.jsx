import React from 'react'

const Sub = (props) => {
  return (
    <div className='about__symbole'>
        <div className='about__symbole-logo'>
            {props.logo}
        </div>
        <h1 className='about__symbole-h1'>
            {props.title}
        </h1>
        <div className='about__line'>
        </div>
    </div>
  )
}

export default Sub