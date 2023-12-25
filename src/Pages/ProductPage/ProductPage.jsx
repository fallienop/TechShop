import React,{useEffect,useState} from 'react';
import style from './ProductPage.module.css';
import ProductTypes from '../../ProductPageComponents/ProductTypes/ProductTypes';
import ProductsSection from '../../ProductPageComponents/ProductsSection/ProductsSection';
import FiltersSection from '../../ProductPageComponents/FiltersSection/FiltersSection';
import menuButton from '../../ProductPageImages/menu.svg';


const ProductPage = () => {
  const isMobile = window.innerWidth < 768;
  
  useEffect(()=>{
    if(isMobile){
      setShowFilters(false)
    }
  },[])
  const [showFilters,setShowFilters]=useState(true)
  return (
    <div className={style.main}>
      {isMobile && <div onClick={()=>{setShowFilters(!showFilters)}} className={style.menuButton}> <p>Filters</p><img  src={menuButton} alt={menuButton} /></div>}
      <ProductTypes />
      <div className={style.products_and_filters}>
        {!showFilters ? null : <FiltersSection />}
        <ProductsSection />
      </div>
    </div>
  );
};

export default ProductPage;
