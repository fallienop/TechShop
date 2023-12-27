import React, { useState } from 'react'
import style from './SearchModal.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const SearchModal = () => {
    const getSearchDataPromise = async (url) => {
        let dataRes = await fetch(url,{
            mode: 'no-cors'
        });
        
        let dataJson = await dataRes.json();
        return dataJson;
    }
    let mainURL = useSelector(state => state.techshopslice.mainURL);

    let storedCategories = useSelector(state => state.techshopslice.categories);

    const getSearchData = async (e) => {
        let inputValue = e.target.value;

        if (inputValue.trim() !== "") {
            let inputEncoded = encodeURIComponent(inputValue);
            let url = `${mainURL}/getbysearch/${inputEncoded}`;

            try {
                let response = await getSearchDataPromise(url);


                setInputResponse(response instanceof Array ? response : [response]);
                if (response.length !== 0) {
                    setDisplayState('block')
                }
                else {
                    setDisplayState('none');

                }
           
            } catch (error) {
                console.error("Error:", error);

            }
        } else {
            setInputResponse([]);
            setDisplayState('none')

        }
    }

    const getCategoryById =(id)=>{
        if(id>7){
          return "gaming"
        }
        return   String( storedCategories[id]).toLowerCase();
      }
    
    const [inputResponse, setInputResponse] = useState([]);
    const [displayState, setDisplayState] = useState('none')

    return (
        <div className={style.main}>
            <input onChange={(e) => getSearchData(e)} type='text' />
            <div style={{ display: displayState }} className={style.responses}>
                {
                    inputResponse.map((x, ind) => (
                        <Link to={`/productdetails/${getCategoryById(x.categoryId)}/${x.id}`}>
                        <div key={ind} className={style.response}>
                            <img src={`data:image/png;base64,${x.imageData}`} />
                            <p>{x.name}</p>
                        </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default SearchModal;
