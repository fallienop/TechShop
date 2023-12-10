import React from 'react'
import style from './NewProducts.module.css'
import vr from '../../Images/NewProducts/vr.png'
import star from '../../Images/NewProducts/Star.svg'

const newProduct=()=>{
  let products=[];
  for(let i=0;i<4;i++){
    products.push(
      <div className={style.newproduct}>
      <img className={style.productphoto} src={vr} alt="vr"/>
     <hr style={{margin:'0', opacity:'0.6',strokeWidth: '1px', stroke: 'rgba(68, 68, 68, 0.10)'}}/>
      <p className={style.productname}>VR</p>
     
      <div className={style.priceandrating}>
           <p className={style.productprice}>1400$</p>
           <div className={style.rating}>
               <img className={style.star} src={star} alt="ratingstarimage"/>
               <p className={style.ratingvalue}>4.2</p>
           </div>
        </div>
     
     </div>
    )
  }
  return products
}

const NewProducts = () => {
  return (
    <div className={style.main}>
      <h4 className={style.newh4}>New Products</h4>
       <hr/>
     
       <div className={style.newproducts}>
       {newProduct()}
      </div>

  </div>
  )
}

export default NewProducts