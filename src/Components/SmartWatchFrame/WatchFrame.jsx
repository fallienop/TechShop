import React from 'react'
import style from './WatchFrame.module.css'
import smartwatchs from '../../Images/SmartWatchFrame/smartwatchs.svg'
const WatchFrame = () => {
  return (
    <div className={style.main}>
      <div className={style.front}>
      <div className={style.texts}>
          <p className={style.title}>SMART WATCH</p>
          <p  className={style.adv}>Various designs and brands</p>
          <button>view</button>
      </div>

      <img className={style.watch} src={smartwatchs} alt="smartwatchs"/>
      </div>

<div className={style.orange}>
    
</div>
    </div>
  )
}

export default WatchFrame