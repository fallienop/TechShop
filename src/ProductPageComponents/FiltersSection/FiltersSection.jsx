import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getSelectedFilters } from '../../Redux/techshopSlicer';
import style from './FiltersSection.module.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const FiltersSection = () => {
  
  const dispatch=useDispatch();
  const rawFilters = useSelector((state) => state.techshopslice.rawFilters);
  const reduxCategories = useSelector((state) => state.techshopslice.categories);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filters, setFilters] = useState([]);
  const animatedComponents = makeAnimated();

  
  

  const Valuereturner = () => {
    let filtersArr = [];
   
    if (rawFilters[0] !== undefined && rawFilters[0].categories !== undefined) {
      if(Object.keys(rawFilters[0]).length==1){
    
      rawFilters[0]["categories"].forEach(x => {
        filtersArr.push({ 
          label: [reduxCategories[x]], value: x
      })
  
   
      })
    }
    }    filtersArr={
       'categories':
        filtersArr
      };
  
  
    
  
    return filtersArr;
  };
 
  const handleSelectChange = (filterKey, selecteddOptions) => {
  setSelectedOptions({filterKey:selecteddOptions});
  };

  const sendSelectedFilters=()=>{
    dispatch(getSelectedFilters(selectedOptions))
  }

 


  useEffect(() => {

    if (rawFilters !== undefined) {
      setFilters(Valuereturner())

    }
  }, [rawFilters])


  return (
    <div className={style.main}>
      <p id='filterapplier' onClick={sendSelectedFilters} className={style.applyfilterbutton}>Apply Filters</p>
     
      {Object.keys(filters).map((filterKey) => (
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
      ))}

    </div>
  );
};

export default FiltersSection;
