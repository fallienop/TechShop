import React from 'react'
import style from './CompanyPromises.module.css'
import first from '../../Images/CompanyPromises/first.svg'
import second from '../../Images/CompanyPromises/second.svg'
import third from '../../Images/CompanyPromises/third.svg'
import fourth from '../../Images/CompanyPromises/fourth.svg'

const returndiv=(image,alt,p,width)=>{
    return    <div className={style.promise}>
                 <img style={{width:`${width}`,height:"auto"}} className={style.promiseImage} src={image} alt={alt}/>
                 <p className={style.promiseText}>{p}</p>
              </div>
}


const CompanyPromises = () => {
  return (
    <div className={style.main}>

   
      {returndiv(first,'first','Latest and Greatest Tech','40px')}
      {returndiv(second,'second','Guarantee','40px')}
      {returndiv(third,'third','Free Shipping over 1000$','62px')}
      {returndiv(fourth,'fourth','24/7 Support','40px')}

    </div>
  )
}

export default CompanyPromises