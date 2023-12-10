import React from 'react'
import style from './SalesSection.module.css'
import g502 from '../../Images/Suggested/g502.svg'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import shape from '../../Images/Suggested/randomshape.png'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
const SalesSection = () => {

    
  return (
    <div className={style.suggestedProducts}>

    <div className={style.infos}>
      <div >
        <img className={style.shape} src={shape} alt="shape"/>
        </div>
      <h3>Products On Sale</h3>
      <h4>Shop Now!</h4>
      <button>View all &gt;</button>
    </div>
    <div className={style.carouselContainer}>
      <Carousel responsive={responsive}>
        {renderCarouselItems()}
      </Carousel>
    </div>
  </div>
  )
}


const renderCarouselItems = () => {
    const items = [];
    const numberOfItems = 22; // Change this to the number of items you want

    for (let i = 0; i < numberOfItems; i++) {
      items.push(
        <div key={i} className={style.carouselItem}>
          <img draggable="false" className={style.productImage} src={g502} alt="mouse" />
          <p>Logitech G502 Gaming Mouse</p>
        </div>
      );
    }

    return items;
  };
export default SalesSection