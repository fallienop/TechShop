import React, { useEffect, useState } from 'react';
import style from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { category, productId } = useParams();
  const [productData, setProductData] = useState({});
  const [productDataWithId, setProductDataWithId] = useState({});

  const setProductDetail = async () => {
    let response = await fetch(`https://localhost:7167/${category}/${productId}`);
    let data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await setProductDetail();
      setProductData(data);
    };

    fetchData();
  }, [category, productId]);

  const getDetailByProp = async (x) => {
    let arr = ['id', 'imageData', 'categoryId'];

    if (!arr.includes(x)) {
      if (x.endsWith('Id')) {
        const response = await fetch(`https://localhost:7167/${x.slice(0, x.length - 2)}/${productData[`${x}`]}`);
        const data = await response.json();
        setProductDataWithId(data);
        return { name:(x.endsWith('Id')? x.slice(0, x.length - 2) :x).toUpperCase(),data:  data.name }
      } else {
        return {name: x.toUpperCase() ,data: productData[`${x}`] }
      }
    } else {
      return null;
    }
  };

  const getObjectList = async () => {
    const list = await Promise.all(Object.keys(productData).map((x) => getDetailByProp(x)));
    return list;
  };

  const [objList, setObjList] = useState([]);

  useEffect(() => {
    const fetchObjectList = async () => {
      const list = await getObjectList();
      setObjList(list);
    };

    fetchObjectList();
  }, [productData]);

  return (
    <div className={style.main}>
      <div className={style.info}>
        <div className={style.product}>
          <img src={`data:image/png;base64,${productData.imageData}`} alt="Product" />
          <div className={style.productinfo}>
            <p className={style.company}>{productData.company}</p>
            <p className={style.price}>{productData.price}</p>
          </div>
        </div>
      </div>

      <div className={style.details}>
  {objList.map((x, index) => (
    <p key={index}>
      <span>{x && x.name ? `${x.name}: ` : ''}</span>
      <span>{x && x.data ? x.data : ''}</span>
    </p>
  ))}
</div>
    </div>
  );
};

export default ProductDetails;
