import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rawFilters: [],
    productType: '',
    categories:['',
    'Laptop',
    'PC',   
    'Monitor',
    'CPU',  
    'GPU',  
    'Phone',
    'Mouse' ],
    selectedFilters:[]
}

export const techshopSlicer = createSlice({

    name: 'techshopslice',
    initialState,
    reducers: {
        getrawFilters: (state, action) => {
            state.rawFilters = action.payload
        },
        getProductType: (state, action) => {

            // if (state.productType === action.payload) {
            //     state.productType="getall"
            // }
            // else {
                state.productType = action.payload
            // }
        },
        getSelectedFilters: (state, action) => {
            state.selectedFilters = action.payload
        },
    }

})

export const { getrawFilters, getProductType,getSelectedFilters } = techshopSlicer.actions
export default techshopSlicer.reducer