import React from 'react'
import style from './ProductInfo.module.css'
const ProductInfo = () => {
  return (

    <div className={style.main}>
            <div   className={style.product}>
          <img src={`data:image/png;base64,${productData.imageData}`} />
         
          <p className={style.productname}>{productData.name}</p>
          <p className={style.company}>{productData.company}</p>
          <p style={{ fontSize: '0.9vw', fontWeight: '300' }}>{productData.description}</p>
        </div>
    </div>

  )
}

export default ProductInfo