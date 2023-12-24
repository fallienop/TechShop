import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom';
const ProductDetails = () => {

  const { category, productId } = useParams();
  const [productData, setProductData] = useState({})


  const setProductDetail = async () => {

    let response = await fetch(`https://localhost:7167/${category}/${productId}`);
    let data = await response.json();
    return data;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await setProductDetail();
      console.log(data)
      setProductData(data);
    };

    fetchData();
  }, [])

  return (
    <div className={style.main} >

      <div className={style.info}>
        <div className={style.product}>
          <img src={`data:image/png;base64,${productData.imageData}`} />
          <div className={style.productinfo}>
            <p className={style.productname}>{productData.name}</p>
            <p className={style.company}>{productData.company}</p>
            <p style={{ fontSize: '0.9vw', fontWeight: '300' }}>{productData.description}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails