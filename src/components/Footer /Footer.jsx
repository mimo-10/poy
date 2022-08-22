import React from 'react'
import images from "../../constants/images";
import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
        <img className='footer-logo' src={images.logo} alt="" />
        <p className='footer-p'>
            © 2022 Powered by POY.
        </p>
    </footer>
  )
}

export default Footer