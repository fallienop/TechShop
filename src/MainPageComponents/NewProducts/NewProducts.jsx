import React, { useEffect, useState } from 'react';
import style from './NewProducts.module.css';
import vr from '../../Images/NewProducts/vr.png';
import star from '../../Images/NewProducts/Star.svg';
import { Link } from 'react-router-dom';
const getProduct = async (id) => {
  let resp = await fetch(`https://localhost:7167/laptop/${id}`);
  let data = await resp.json();
  return data;
};

const NewProduct = ({ id }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct(id);
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!productData) {
    return null; // You can also render a loading spinner or message while fetching data
  }

  const { name, price, rating ,imageData} = productData;

  return (
    <Link to={`/productdetails/laptop/${id}`}>

    <div className={style.newproduct}>
      <img className={style.productphoto} src={`data:image/png;base64,${  imageData}`} alt={name} />
      <hr
        style={{ margin: '0', opacity: '0.6', strokeWidth: '0.07vw', stroke: 'rgba(68, 68, 68, 0.10)' }}
      />
      <p className={style.productname}>{name}</p>

      <div className={style.priceandrating}>
        <p className={style.productprice}>{price}₼</p>
        <div className={style.rating}>
          <img className={style.star} src={star} alt="ratingstarimage" />
          <p className={style.ratingvalue}>5.0  </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

const NewProducts = () => {
  return (
    <div className={style.main}>
      <h4 className={style.newh4}>New Products</h4>
      <hr />

      <div className={style.newproducts}>
        <NewProduct id={1} />
        <NewProduct id={2} />
        <NewProduct id={3} />
        <NewProduct id={4} />
      </div>
    </div>
  );
};

export default NewProducts;
