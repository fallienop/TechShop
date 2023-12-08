import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
  return (
    <footer>
        <div className={style.footerSections}>
          <p className={style.footerTitle}>Company</p>
          <p>about us</p>
          <p>blog</p>
          <p>returns</p>
          <p>order status</p>
        </div>

        <div className={style.footerSections}>
          <p className={style.footerTitle}>Info</p>
          <p>How it works?</p>
          <p>our promises</p>
          <p>FAQ</p>
        </div>

        <div className={style.footerSections}>
          <p className={style.footerTitle}>Contact us</p>
          <div className={style.contacts}>
            <img ></img>
          <p>123 Main Street, Anytown,USA</p>
          </div>
      
          <p>+1 (555) 123-4567</p>
          <p>TechHeimSupport@gmail.com</p>
        </div>

    </footer>
  )
}

export default Footer