import React, { useState } from 'react'
import style from './SuggestedCategories.module.css'
import phoneP from '../../Images/Suggested/istockphoto-1309147753-612x612.jpg'
import laptopP from '../../Images/Suggested/RW16e0d.jpg'
import dualshock from '../../Images/Suggested/dualshock.svg'
import watch from '../../Images/Suggested/watch.png'
import pcCase from '../../Images/Suggested/case.avif'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProductType } from '../../Redux/techshopSlicer'

const SuggestedCategories = () => {


   const dispatch = useDispatch()
   const sendType = (e) => {
      let p = e.currentTarget.querySelector('p');
      let ptext=p.innerHTML;
   
      switch (ptext) {
         case 'Laptops':
           ptext = 'laptop';
           break;
         case 'PC':
           ptext = 'pc';
           break;
         case 'Phone':
           ptext = 'phone';
           break;
         case 'Gaming':
           ptext = 'gaming';
           break;
         case 'Accessories':
           ptext = 'Accessories';
           break;
         default:
           ptext = 'getall';
       }
     
      dispatch(getProductType(ptext));
   }
   


   return (
      <div className={style.main}>

         <div className={style.categories}>
            <ul>
               <Link to={`/products`}>
                  <li onClick={(e) => sendType(e)} >
                     <img src={laptopP} alt="laptopP" className={style.simg} />
                     <p>Laptops</p>
                  </li>
               </Link>

               <Link to={`/products`}>
               <li onClick={(e) => sendType(e)}>
                  <img  src={pcCase} alt="pcCase" className={style.simg} />
                  <p>PC</p>

               </li>
               </Link>

             <Link to={`/products`}>

               <li onClick={(e) => sendType(e)}>
                  <img  className={style.simg} src={phoneP} alt="phoneP" />
                  <p>Phone</p>

               </li>
              </Link>
               <Link to={`/products`}>
                  <li onClick={(e) => sendType(e)} >
                     <img className={style.simg} src={dualshock} alt="dualshock" />
                     <p>Gaming</p>
                  </li>
               </Link>
               <Link to={`/products`}>
               <li onClick={(e) => sendType(e)}>

                  <img className={style.simg} src={watch} alt="watch" />
                  <p>Accessories</p>

               </li>
               </Link>
            </ul>
         </div>


      </div>
   )
}

export default SuggestedCategories