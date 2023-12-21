import React, { useState, useEffect } from 'react'
import style from './ProductsSection.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getrawFilters } from '../../Redux/techshopSlicer';


const Hline = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="258" height="2" viewBox="0 0 200 2" fill="none">
      <path d="M1 1H257" strokeLinecap="round" stroke="url(#paint0_linear_4366_1172)" />
      <defs>
        <linearGradient id="paint0_linear_4366_1172" x1="1" y1="2.00002" x2="257" y2="1.00002" gradientUnits="userSpaceOnUse">
          <stop stopColor="#428AF6" stopOpacity="0.3" />
          <stop offset="0.541667" stopColor="#0951BE" />
          <stop offset="0.9947" stopColor="#428AF6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
};


const ProductsSection = () => {

  let productType = useSelector(state => state.techshopslice.productType)
  const getData = async () => {
    let data = await fetch(`https://localhost:7167/getall`);;


    if (productType) {
      data = await fetch(`https://localhost:7167/${productType}`);
    }
    let jsondata = await data.json();
    var arr = Object.keys(jsondata).reduce(function (res, v) {
      return res.concat(jsondata[v]);
    }, []);
    return arr;
  }
  const dispatch = useDispatch();

  const [apiData, setApiData] = useState([]);

  useEffect(() => {

    getData().then(res => {
      // console.log(res)
      setApiData(res)
    });

    // console.log(apiData)
  }, [productType]);

  useEffect(() => {

    function categoryReturner(id) {
      let category = '';
      switch (id) {
        case 1: category = 'Laptop'; break;
        case 2: category = 'PC'; break;
        case 3: category = 'Monitor'; break;
        case 4: category = 'CPU'; break;
        case 5: category = 'GPU'; break;
        case 6: category = 'Phone'; break;
        case 7: category = 'Mouse'; break;
      }
      return category;
    }
    function areAllValuesSame(arr) {

      return arr.every((value, index, array) => value === array[0]);
    }


    if (apiData.length > 0) {
      let categories = apiData.map(x => {
        return x.categoryId
      }
      )

      if (areAllValuesSame(categories)) {



      }




      let filters = {};
      const keysToExclude = ['imageData', 'id', 'name', 'description', 'socket'];
      apiData.forEach(obj => {

        Object.keys(obj).forEach(x => {
          if (!keysToExclude.includes(x)) {

            if (!filters[x]) {
              filters[x] = [];
            }
            filters[x].push(obj[x]);

            filters[x] = Array.from(new Set(filters[x]));
          }
        })

      });
      dispatch(getrawFilters([filters]));
    }
  }, [apiData]);





  return (
    <div className={style.main}>
      {apiData.map((element) => (
        element.imageData ? <div key={element.description} className={style.product}>
          <img src={`data:image/png;base64,${element.imageData}`} />
          <Hline style={{ margin: '0 auto' }} />
          <p>{element.name}</p>
          <p style={{ fontSize: '0.9vw', fontWeight: '300' }}>{element.description}</p>
        </div> : null


      ))}

    </div>
  )
}

export default ProductsSection