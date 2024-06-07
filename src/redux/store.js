import {configureStore} from "@reduxjs/toolkit"
import ecommerseSlice from "./features/ecommerseSlice"
export const store = configureStore({
  reducer: {
    ecommerse: ecommerseSlice,
  },
})
