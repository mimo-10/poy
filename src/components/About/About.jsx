import React from 'react'
import {data} from "../../constants/data";
import "./about.css";
import Sub from './sub/Sub';
import {TbManualGearbox} from "react-icons/tb";
import {GiBookmarklet} from "react-icons/gi";
import {FaHistory} from "react-icons/fa";


const About = () => {
  const about = data.about;
  const infos = about.info.map((info, index)=> {
    return (
      <div key={index} className='about__info_circ'>
        <h4 className='about__info_circ-h4'>
          {info[0]}
        </h4>
        <p className='about__info_circ-p'>
          {info[1]}
        </p>
      </div>
    )
  })
  const history1 = about.history.map((info, index)=> {
    return (
      <div key={index} className='about__history_part'>
        <h4 className='about__history-h4'>
          {info[0]}
        </h4>
      </div>
    )
  })
  const history2 = about.history.map((info, index)=> {
    return (
      <div key={index} className='about__history_part'>
        <h3 className='about__history-h3'>
          {info[1]}
        </h3>
      </div>
    )
  })

  const skills = about.skills.map((skill, index)=> {
    let style = {
      background: `conic-gradient(rgba(240, 248, 255, 0.1) ${skill[2]*100/5}%, transparent ${skill[2]*100/5}% 100%)`
    }
    return(
      <div key={index} className='about__skills_rating'>
        <div style={style} className='about__skills_rating-circ'>
          <div className='circle'>
            {skill[2]}
          </div>
        </div>
        <div className='about__skills_info'>
          <h2>
            {skill[0]}
          </h2>
          <p className='about_skills_info-p'>
            {skill[1]}
          </p>
        </div>
      </div>
    )
  })
  const edu = about.education.map((cert, index) => {
    return (
      <div key={index} className='about__edu'>
        <GiBookmarklet />
        <div className='about__edu-t'>
          {cert}
        </div>
      </div>
    )
  })
  return (
    <div className='about'>
        <p className='about__desc'>
          {about.description}
        </p>
        <div className='about__info'>
          {infos}
        </div>
        <div className='about__history'>
          <Sub title="work history" logo={<FaHistory />} />
          <div className='about__history_info'>
            <div className='about__history_info-1'>
              {history1}
            </div>
            <div className='about__history_info-2'>
              {history2}
            </div>
          </div>
        </div>
        <div className='about__education'>
          <Sub title="education" logo={<GiBookmarklet />} />
          <div className='about__educ'>
            {edu}
          </div>
        </div>
        <div className='about__skills'>
          <Sub title="skills" logo={<TbManualGearbox />} />
          <div className='about__skills_list'>
            {skills}
          </div>
        </div>
    </div>
  )
}

export default About