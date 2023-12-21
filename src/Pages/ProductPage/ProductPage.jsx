import React from 'react'
import style from './ProductPage.module.css'

import ProductTypes from '../../ProductPageComponents/ProductTypes/ProductTypes';
import ProductsSection from '../../ProductPageComponents/ProductsSection/ProductsSection';
import FiltersSection from '../../ProductPageComponents/FiltersSection/FiltersSection';

const ProductPage = () => {
  return (
    <div className={style.main}>
      <ProductTypes/>
      <div className={style.products_and_filters}>
        <FiltersSection/>
        <ProductsSection  />
      </div>
    </div>  
  )
}

export default ProductPage