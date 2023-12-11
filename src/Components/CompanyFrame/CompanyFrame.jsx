import React from 'react'
import style from './CompanyFrame.module.css'
import laptopPhoto from '../../Images/CompanyFrame/4d54715f5a9efbe4e0abf224c5fa5484.png'
const CompanyFrame = () => {
  return (
    <div className={style.main}>
      
      <div className={style.texts}>
   <h1>Tech Heim</h1>
   <p> "Join the <span style={{color:"#F45E0C"}}>digital revolution</span>" </p>

        <button className={style.explorebutton}>Explore More</button>
      </div>
      <img src={laptopPhoto} alt="laptopphoto"/>
    </div>
  )
}

export default CompanyFrame