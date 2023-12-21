import { configureStore } from "@reduxjs/toolkit";

import techshopslicer from './techshopSlicer'

export const store=configureStore({
    reducer:{
        techshopslice:techshopslicer
    }
    , middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
