import React, { useEffect,useRef } from 'react'
import style from './ProductTypes.module.css'
import mobile from '../../ProductPageImages/ProductTypes/mobile.svg'
import pc from '../../ProductPageImages/ProductTypes/monitor.svg'
import gaming from '../../ProductPageImages/ProductTypes/game.svg'
import parts from '../../ProductPageImages/ProductTypes/data.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getProductType } from '../../Redux/techshopSlicer'

const ProductTypes = () => {

  const dispatch = useDispatch()
  const categoriesref = useRef(null);
  let productType = useSelector(state => state.techshopslice.productType)

  const sendProductType = (e) => {

    let p = e.currentTarget.querySelector('p');
            
    if (p) {
      if(productType!=p.innerHTML){
      dispatch(getProductType(p.innerHTML));
      }
      else{
        dispatch(getProductType("getall"));
      }
    }

  }

    useEffect(() => {
      const categories = categoriesref.current;
      const categoryList = Array.from(categories.children);
      categoryList.forEach(category => {
        let p = category.querySelector('p');
        let img = category.querySelector('img');
       
        if (p.innerHTML.toLowerCase() === productType.toLowerCase()) {
        
        
          p.style.color = 'darkblue';
          img.style.filter = 'invert(14%) sepia(37%) saturate(6257%) hue-rotate(234deg) brightness(85%) contrast(138%)';
       
        }
        else{
          p.style.color = '';
          img.style.filter="";

        }
      });
    }, [productType]);

  return (


    <div ref={categoriesref} className={style.categories} >
      <div onClick={(e) => sendProductType(e)} className={style.category}>
        <img src={mobile} alt="mobile" />
        <p>Mobile</p>
      </div>

      <div onClick={(e) => sendProductType(e)} className={style.category}>
        <img src={pc} alt="pc" />
        <p>PC</p>
      </div>

      <div onClick={(e) => sendProductType(e)} className={style.category}>
        <img src={gaming} alt="gaming" />
        <p>Gaming</p>
      </div>

      <div onClick={(e) => sendProductType(e)} className={style.category}>
        <img src={parts} alt="pc parts" />
        <p>Parts</p>
      </div>

      <div onClick={(e) => sendProductType(e)} className={style.category}>
        <img src={pc} alt="laptop" />
        <p>Laptop</p>
      </div>

    </div>

  )
}

export default ProductTypes