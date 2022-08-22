import React from 'react'
import {IoLogoYoutube} from "react-icons/io";
import {FaFacebook, FaGithubSquare, FaDownload} from "react-icons/fa";
import {BsTwitter, BsLinkedin} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {TiContacts} from "react-icons/ti"
import images from "../../constants/images"
import { NavLink, Outlet } from 'react-router-dom';
import "./header.css";
import {Footer} from "../index"


const Header = () => {
  return (
    <header className='header container'>
        
        <section className='header__profile'>
            <div className='header__profile-img'>
                <img src={images.pic} alt="" />
            </div>
            <div className='header__profile-info'>
                <h3>
                    David Dude
                </h3>
                <p>
                    Web Developer
                </p>
                <ul className='header__profile-info-list'>
                    <li>
                        <a href=''>
                            <IoLogoYoutube />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <BsTwitter />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <BsLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <FaGithubSquare />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section className='header__btns'>
            <button className='header__btns-btn-1'>
                download cv   
                <FaDownload className='icon'/>
            </button>
            <button className='header__btns-btn-2'>
                contact me
                <TiContacts className='icon'/>
            </button>
        </section>
        <section className='header__info'>
            <div className='header__info-link' >
                <NavLink 
                    className='link' 
                    style={({isActive}) => {
                        return {backgroundColor: isActive? "var(--color-alt)": "transparent"}
                    }}
                    to="/">
                    work
                </NavLink>
            </div>
            <div className='header__info-link'>
                <NavLink 
                    className='link' 
                    style={({isActive}) => {
                        return ({backgroundColor: isActive? "var(--color-alt)": "transparent"})
                    }}
                    to="/about">
                    about
                </NavLink>
            </div>
        </section>
        <Outlet />
        <Footer />
    </header>
  )
}

export default Header