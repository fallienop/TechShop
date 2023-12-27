import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rawFilters: [],
    productType: '',
    categories: ['',
        'Laptop',
        'PC',
        'Screen',
        'CPU',
        'GPU',
        'Phone',
        'Accessories',
        'Mouse',
        'Console',
        'Headset'],
    selectedFilters: [],
    // mainURL:'https://localhost:7167'
    mainURL:'https://172.17.64.135:5217'
//   mainURL:'https://s2qnstn6-7167.euw.devtunnels.ms'
}

export const techshopSlicer = createSlice({

    name: 'techshopslice',
    initialState,
    reducers: {
        getrawFilters: (state, action) => {
            state.rawFilters = action.payload
        },

        getProductType: (state, action) => {
            state.productType = action.payload
        },

        getSelectedFilters: (state, action) => {
            state.selectedFilters = action.payload
        },
        resetState: (state, action) => {
            switch (action.payload) {
                case 'RESET':
                  return initialState;
                // Diğer durumlar...
                default:
                  return state;
              }
        }
    }

})

export const { getrawFilters, getProductType, getSelectedFilters,resetState } = techshopSlicer.actions
export default techshopSlicer.reducer