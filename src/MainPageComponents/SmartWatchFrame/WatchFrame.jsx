import React from 'react'
import style from './WatchFrame.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProductType } from '../../Redux/techshopSlicer'
import smartwatchs from '../../Images/SmartWatchFrame/smartwatchs.svg'
const WatchFrame = () => {
  const dispatch = useDispatch()

  const sendType = () => {
    dispatch(getProductType('Accessories'));
  }

  return (
    <div className={style.main}>
      <div className={style.front}>
        <div className={style.texts}>
          <p className={style.title}>SMART WATCH</p>
          <p className={style.adv}>Various designs and brands</p>
          <Link to={`/products`}>  <button onClick={sendType} className={style.viewwatchbutton}>view</button></Link>
        </div>

        <img className={style.watch} src={smartwatchs} alt="smartwatchs" />
      </div>

      <div className={style.orange}>

      </div>
    </div>
  )
}

export default WatchFrame