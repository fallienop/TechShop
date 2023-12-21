import React from 'react'
import style from './TopBrands.module.css'
import asus from     '../../Images/TopBrands/asus.png'
import msi from      '../../Images/TopBrands/msi.png'
import mi from       '../../Images/TopBrands/mi.png'
import samsung from  '../../Images/TopBrands/samsung.svg'
import apple from    '../../Images/TopBrands/apple.svg'
const TopBrands = () => {
  return (
    <div className={style.main}>
      <h4 className={style.newh4}>Top Brands</h4>
         <hr/>
         <div className={style.brands}>
             <img style={{width:'13.82vw',height:'10.37vw'}} src={asus} alt="asus"/>
             <img style={{width:'6.25vw',height:'6.25vw'}} src={msi} alt="msi"/>
             <img style={{width:'6.25vw',height:'6.25vw'}} src={mi} alt="mi"/>
             <img style={{width:'14.8vw',height:'2.26vw'}} src={samsung} alt="samsung"/>
             <img style={{width:'3.47vw',height:'10.8vw'}} src={apple} alt="apple"/>
        </div>
    </div>
  )
}

export default TopBrands