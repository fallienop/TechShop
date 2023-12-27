import React, { useEffect, useState } from 'react';
import style from './SalesSection.module.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import shape from '../../Images/Suggested/randomshape.png';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};


const SalesSection = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  let storedCategories = useSelector(state => state.techshopslice.categories);
  let mainURL = useSelector(state => state.techshopslice.mainURL);
  const getData = async () => {
    let resp = await fetch(`${mainURL}/getall`,{headers: {'Access-Control-Allow-Origin': '*'}})
  console.log(`${mainURL}/getall`);
    let jsondata = await resp.json();
    var arr = Object.keys(jsondata).reduce(function (res, v) {
      return res.concat(jsondata[v]);
    }, []);
    return arr;
  };
  useEffect(() => {
    fetchData();
  }, []);
  const getCategoryById =(id)=>{
    if(id>7 ){
      return "gaming"
    }
    return   String( storedCategories[id]).toLowerCase();
  }
  const fetchData = async () => {
    const data = await getData();
    const items = data
      .filter((x) => x.imageData) // Filter out items where imageData is empty
      .map((x) => (
        
        <Link to={`/productdetails/${getCategoryById(x.categoryId)}/${x.id}`}>
        <div key={x.id} className={style.carouselItem}>
          <img
            draggable="false"
            className={style.productImage}
            src={`data:image/png;base64,${x.imageData}`}
            alt="mouse"
          />
          <p className={style.productName}>{x.name}</p>
        </div>
        </Link>
      ));
  
    setCarouselItems(items);
  };
  

  return (
    <div className={style.suggestedProducts}>
      <div className={style.infos}>
        <div>
          <img className={style.shape} src={shape} alt="shape" />
        </div>
        <h3>Products On Sale</h3>
        <h4>Shop Now!</h4>
        <button className={style.salessectionbutton}>View all &gt;</button>
      </div>
      <div className={style.carouselContainer}>
        <Carousel responsive={responsive}>{carouselItems}</Carousel>
      </div>
    </div>
  );
};



export default SalesSection;
  