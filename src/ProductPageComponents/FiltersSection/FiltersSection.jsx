import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import style from './FiltersSection.module.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const FiltersSection = () => {
  const rawFilters = useSelector((state) => state.techshopslice.rawFilters);

  const Valuereturner = () => {
   let filters=[]
    
  //  rawFilters.foreach()
console.log(rawFilters)
    return;
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    console.log(selectedOptions);
  };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const animatedComponents = makeAnimated();

  return (
    
    <div className={style.main}>
      {rawFilters.map((e)=>(
        <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={Valuereturner()}
        onChange={handleSelectChange}
      />
      ))}
     
    </div>
  );
};

export default FiltersSection;
