import React from 'react'
import style from './SuggestedCategories.module.css'
import phoneP from '../Images/Suggested/istockphoto-1309147753-612x612.jpg'
import laptopP from '../Images/Suggested/RW16e0d.jpg'
import dualshock from '../Images/Suggested/dualshock.svg'
import watch from '../Images/Suggested/watch.png'
import pcCase from '../Images/Suggested/case.avif'


const SuggestedCategories = () => {
  return (
   <div className={style.main}>

     <div className={style.categories}>
         <ul>
           
            <li>
                <img  src={laptopP} alt="phone" className={style.simg}/>
              <p>Laptops</p>  
            </li>
           
            <li>
               <img  src={pcCase} alt="phone"  className={style.simg}  />
               <p>PC</p>  
                
            </li>
           
            <li>
               <img  className={style.simg}  src={phoneP} alt="phone"/>
               <p>Phone</p>  
                
            </li>

            <li>
               <img className={style.simg} src={dualshock} alt="phone"/>
               <p>Gaming</p>  
                
            </li>

            <li>
                
               <img className={style.simg} src={watch} alt="phone"/>
               <p>Accessories</p>  
                
            </li>
         </ul>
     </div>

    
   </div>
  )
}

export default SuggestedCategories