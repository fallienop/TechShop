import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rawFilters: [],
    productType: ''
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
        }
    }

})

export const { getrawFilters, getProductType } = techshopSlicer.actions
export default techshopSlicer.reducer