import React from 'react'
import style from './Featured.module.css'
import ip15 from '../../Images/Featured/iphone15.png'
import ps5 from  '../../Images/Featured/ps5.png'

const leftUpperOrange=()=>{
return  <svg xmlns="http://www.w3.org/2000/svg" width="7.64vw" height="7.08vw" viewBox="0 0 110 102" fill="none">
<path d="M110 0C110 13.3948 107.142 26.6585 101.589 39.0337C96.0355 51.4089 87.8962 62.6533 77.6353 72.1249C67.3744 81.5965 55.193 89.1097 41.7865 94.2357C28.38 99.3617 14.0111 102 -0.500008 102L-0.5 0H110Z" fill="#FCC870"/>
</svg>  
}

const bottomOrange=()=>{
  return  <svg width="30.83vw" height="18.125vw" viewBox="0 0 444 261" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="222" cy="160" rx="283" ry="160" fill="#FCC870"/>
 </svg>
  } 

const Featured = () => {
  return (
    <div className={style.main}>
      <div className={style.ip15}>
      
        <div className={style.imageandtitle}>
             <p className={style.phonename}>IPhone <span style={{color:'white'}}>15 Series</span></p>   
             <img className={style.ip15img} src={ip15} alt="iphone15"/>
         </div>
         <div className={style.countdownandabout}>
            <div className={style.countdown}>
              <div style={{padding:'0.55vw'}} className={style.counts}>8 days</div>
              <div style={{padding:'0.55vw'}} className={style.counts}>15 hour</div>
              <div className={style.counts}>53 minute</div>
              <div className={style.counts}>43 second</div>
            </div> 
            <p className={style.aboutTitle}>It feels good to be the first</p>
            <p className={style.about}>Get ready for the future of smartphones.Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.</p>
            <button className={style.registerbutton}>Register Now</button>
         </div>
         
      </div>
     
      <div className={style.ps5}>

      <p className={style.ps5title}> Play Station 5</p>   
        <div className={style.leftupperorange}>
           {leftUpperOrange()}
        </div>
   
        <p className={style.ps5spec}>Digital Edition + 2TB</p>
        <div className={style.bottomorange}>
           {bottomOrange()}
        </div>

    <img src={ps5} className={style.ps5image} alt="playstation5"/>

<button className={style.registerToPs5}>Buy Now</button>
      </div>
    </div>
  )
}

export default Featured