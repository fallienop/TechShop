import React from 'react'
import style from './ProductsModal.module.css'
import mobile  from '../../../../Images/Header/Modals/ProductModal/mobile.svg'
import pc  from '../../../../Images/Header/Modals/ProductModal/monitor.svg'
import gaming  from '../../../../Images/Header/Modals/ProductModal/game.svg'
import parts from '../../../../Images/Header/Modals/ProductModal/data.svg'
const ProductModal = () => {
  return (
    <div className={style.modal}>
    
    <div className={style.modalcontent}>
      <div className={style.categories}>
        <div className={style.category}>
         <img src={mobile} alt="mobile"/>
         <p>Mobile Phones</p>
        </div>
        <div className={style.category}>
        <img src={pc} alt="pc"/>
         <p>Personal Computers</p>
        </div>
        <div className={style.category}>
        <img src={gaming} alt="gaming"/>
         <p>Gaming</p>
        </div>
        <div className={style.category}>
        <img src={parts} alt="pc parts"/>
         <p>PC Parts</p>
        </div>
      </div>

      <div className={style.categoryDetail}>
        {/* <h1>vsfs</h1> */}
      </div>
  
    </div>
  </div>
  )
}

export default ProductModal