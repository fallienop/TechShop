import React, { useState, useEffect,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedFilters, resetState } from '../../Redux/techshopSlicer';
import style from './FiltersSection.module.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const FiltersSection = () => {

  const dispatch = useDispatch();
  const rawFilters = useSelector((state) => state.techshopslice.rawFilters);
  const reduxCategories = useSelector((state) => state.techshopslice.categories);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showPriceSection, setPriceSection] = useState(false);
  const [filters, setFilters] = useState([]);
  const animatedComponents = makeAnimated();
  const minimumPrice = useRef();
  const maximumPrice = useRef();


  const priceReturner = () => {
    if (showPriceSection) {
      return <div className={style.priceinputBox}>
        <p>price</p>
        <div className={style.priceinput}>
          <input  ref={minimumPrice} onInput={(e) => inputNumberValidator(e)} type='text' placeholder='min'></input>
          <input  ref={maximumPrice}  onInput={(e) => inputNumberValidator(e)} type='text' placeholder='max'></input>
        </div>
      </div>
    }
  }

  const inputNumberValidator = (e) => {
    const inputValue = e.target.value;
    const regex = /^\d+(\.\d{0,4})?$/;

    if (!inputValue.match(regex)) {
      // Remove the last character if it doesn't match the regex
      e.target.value = inputValue.slice(0, -1);
    }
  }

  const nameByIdReturner = (category, val) => {

    return fetch(`'https://cfhqj2mq-7167.euw.devtunnels.ms/${category}names/${val}`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then(apiResponse => apiResponse.json())
      .then((data) => (
        {
        label: data,
        value: val
      }));
  }

  const Valuereturner = async () => {

    let filtersArr = {};


    if (rawFilters[0] !== undefined) {
      if (Object.keys(rawFilters[0]).length === 1) {
        setPriceSection(false);

        const categoryKey = Object.keys(rawFilters[0])[0];
        const categoryValues = rawFilters[0][categoryKey];

        filtersArr[categoryKey] = categoryValues.map(x => ({
          label: [reduxCategories[x]],
          value: x
        }));
      } else {
        setPriceSection(true);
        let rawfilter = rawFilters[0];
        await Promise.all(
          Object.keys(rawfilter).map(async (filterkey) => {
            if (filterkey != 'categoryId' && filterkey != 'price') {
              const filterValues = rawfilter[filterkey];


              filtersArr[filterkey] = await Promise.all(
                filterValues.map(async (x) => {
                  return filterkey.endsWith('Id') ? await nameByIdReturner(filterkey, x) : {
                    label: x,
                    value: x 
                  };



                })
                );


            }
          }));


      }
    }

    return filtersArr;
  };



  const handleSelectChange = (filterKey, selecteddOptions) => {
    const values = selecteddOptions.map(obj => obj.value);
    setSelectedOptions({ [filterKey]: values });
  };

  const sendSelectedFilters = () => {
   let priceFilter= handlePrices();
   if(priceFilter!=null){
  
   const pricedSelectedopts = Object.assign({prices: priceFilter}, selectedOptions);
   dispatch(getSelectedFilters(pricedSelectedopts))

  }else{
    dispatch(getSelectedFilters(selectedOptions))}
  }

  const handlePrices = () => {
    let minimum = minimumPrice.current;
    let maximum = maximumPrice.current;
  
    if (minimum && maximum && minimum.value && maximum.value) {
      let minimumValue = minimum.value;
      let maximumValue = maximum.value;
  
      if (minimumValue < maximumValue) {
        return [minimumValue, maximumValue];
      }
    }
  
    // Handle the case where minimum or maximum is undefined or their values are not valid
    return null;
  };
  


  useEffect(() => {
    if (rawFilters !== undefined) {
      Valuereturner().then((result) => {
        setFilters(result);
      });
    }
  }, [rawFilters])


  return (
    <div className={style.main}>
      <span id='filterapplier' onClick={sendSelectedFilters} className={style.applyfilterbutton}>Apply Filters</span>

      {Object.keys(filters).map((filterKey, ind) => (
        <div key={ind} className={style.filtes}>
          <p className={style.filtername}>{filterKey.endsWith('Id') ? filterKey[0].toUpperCase() + filterKey.slice(1,filterKey.length-2) : filterKey[0].toUpperCase()+ filterKey.slice(1)}</p>
          <Select
            key={filterKey}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={filters[filterKey]}
            onChange={(selectedOptions) =>
              handleSelectChange(filterKey, selectedOptions)
            }
          />


        </div>
      ))}

      {priceReturner()}

      <span className={style.reseter} onClick={() => { window.location.reload() }}>Reset</span>
    </div>

  );
};

export default FiltersSection;
