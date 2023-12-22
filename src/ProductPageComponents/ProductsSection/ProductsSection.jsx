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

  let productType = useSelector(state => state.techshopslice.productType);
  let selectedFilters = useSelector(state => state.techshopslice.selectedFilters);
  const dispatch = useDispatch();

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


  const [apiData, setApiData] = useState([]);
  const [apiMainData, setMainApiData] = useState([]);


  useEffect(() => {
    getData().then(res => {
      setApiData(res)
      setMainApiData(res)
    });
  }, [productType]);




  useEffect(() => {
    function areAllValuesSame(arr) {
      return arr.every((value, index, array) => value === array[0]);
    }

    if (apiData.length > 0) {
      let categories = apiData.map(x => {
        return x.categoryId
      })
      
      let filters = {};

      if (areAllValuesSame(categories)) {
       
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
    

      }
      
      else {
        filters = {
          categoryId: []
        }
        apiMainData.forEach(x => {

          filters.categoryId.push(x.categoryId);
        })
        filters.categoryId = Array.from(new Set(filters.categoryId));
      }

      dispatch(getrawFilters([filters]));
    }
  }, [apiData]);




  useEffect(() => {
    if (selectedFilters.length !== 0) {
      if (selectedFilters.categoryId.length !== 0) {
        let datas = apiMainData.filter(item => {
          return Object.keys(selectedFilters).every(filterKey => {
            let filterValues = selectedFilters[filterKey];
            let itemValue = item[filterKey];
            return filterValues.includes(itemValue);
          });
        });
        setApiData(datas)
      }
      else {
        setApiData(apiMainData);
      }
    }
  }, [selectedFilters]);



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