import React, { useState } from 'react'
import style from './SearchModal.module.css';

const SearchModal = () => {
    const getSearchDataPromise = async (url) => {
        let dataRes = await fetch(url);
        let dataJson = await dataRes.json();
        return dataJson;
    }

    const getSearchData = async (e) => {
        let inputValue = e.target.value;

        if (inputValue.trim() !== "") {
            let inputEncoded = encodeURIComponent(inputValue);
            let url = `https://localhost:7167/getbysearch/${inputEncoded}`;

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


    const [inputResponse, setInputResponse] = useState([]);
    const [displayState, setDisplayState] = useState('none')

    return (
        <div className={style.main}>
            <input onChange={(e) => getSearchData(e)} type='text' />
            <div style={{ display: displayState }} className={style.responses}>
                {
                    inputResponse.map((x, ind) => (
                        <div key={ind} className={style.response}>
                            <img src={`data:image/png;base64,${x.imageData}`} />
                            <p>{x.name}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default SearchModal;
