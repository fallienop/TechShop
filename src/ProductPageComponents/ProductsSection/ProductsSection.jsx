import React, { useState, useEffect } from 'react'
import style from './ProductsSection.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getrawFilters } from '../../Redux/techshopSlicer';
import { Link } from 'react-router-dom'

const isMobile=window.innerWidth<768;
const Hline = () => {

  return (
    !isMobile&&(
    <svg xmlns="http://www.w3.org/2000/svg" width="18vw" height="0.5vw" viewBox="0 0 200 2" fill="none">
      <path d="M1 1H257" strokeLinecap="round" stroke="url(#paint0_linear_4366_1172)" />
      <defs>
        <linearGradient id="paint0_linear_4366_1172" x1="1" y1="2.00002" x2="257" y2="1.00002" gradientUnits="userSpaceOnUse">
          <stop stopColor="#428AF6" stopOpacity="0.3" />
          <stop offset="0.541667" stopColor="#0951BE" />
          <stop offset="0.9947" stopColor="#428AF6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>)
  );
};


const ProductsSection = () => {

  let productType = useSelector(state => state.techshopslice.productType);
  let selectedFilters = useSelector(state => state.techshopslice.selectedFilters);
  let storedCategories = useSelector(state => state.techshopslice.categories);
  let mainURL = useSelector(state => state.techshopslice.mainURL);
  const dispatch = useDispatch();

  const getData = async () => {
    let data = await fetch(`${mainURL}/getall`);;


    if (productType) {
      data = await fetch(`${mainURL}/${productType}`);
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
        apiMainData.forEach(obj => {
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



  const areAllPropertiesEmpty = (obj) => {
    return Object.values(obj).every(value => value === null || value === undefined || value.length === 0 || value === '');
  };

  useEffect(() => {
   
    if (selectedFilters && Object.keys(selectedFilters).length !== 0) {

     

      if (
        // (
        // selectedFilters.categoryId && selectedFilters.categoryId.length !== 0) ||
        // Object.keys(selectedFilters).includes('categoryId') &&
         Object.keys(selectedFilters).length == 1) {

        let datas = apiMainData.filter(item => {
          return Object.keys(selectedFilters).every(filterKey => {
            let filterValues = selectedFilters[filterKey];
            let itemValue = item[filterKey];
            return filterValues.includes(itemValue);
          });
        });

        setApiData(datas);

        setMainApiData(datas);


      }
      else {



        if (!areAllPropertiesEmpty(selectedFilters)) {
          let filteredData = apiMainData;

          // Check if price filter exists, filter by price range
          if (selectedFilters.prices) {
            const [minPrice, maxPrice] = selectedFilters.prices;
            filteredData = filteredData.filter(item => item.price >= minPrice && item.price <= maxPrice);
          }

          // Apply other filters
          filteredData = filteredData.filter(item => {
            return Object.keys(selectedFilters).every(filterKey => {
              if (filterKey === 'prices') {
                return true; // already handled by the price filter logic above
              }
              let filterValues = selectedFilters[filterKey];
              let itemValue = item[filterKey];
              return filterValues.includes(itemValue);
            });
          });

          setApiData(filteredData);
        }
        else {
          setApiData(apiMainData)
        }
      
      }
    }

  }, [selectedFilters]);

  const getCategoryById =(id)=>{
    if(id>7 ){
      return "gaming"
    }
    return   String( storedCategories[id]).toLowerCase();
  }


  return (
    <div className={style.main}>
      {apiData.map((element) => (
        element.imageData ? 
        <Link key={element.description} to={`/productdetails/${getCategoryById(element.categoryId)}/${element.id}`}>
        <div  key={element.description} className={style.product}>
          <div className={style.imageContainer}> <img src={`data:image/png;base64,${element.imageData}`} /></div>
         
          <Hline style={{ margin: '0 auto' }} />
          <p className={style.elementname}>{element.name}</p>
          <p  className={style.elementdesc} style={{ fontSize: '0.9vw', fontWeight: '300' }}>{element.description}</p>
          <p style={{margin:'0',color:'gray'}}>{element.price}azn </p>
        </div>   </Link> : null
   
      ))}
    </div>
  )
}

export default ProductsSection