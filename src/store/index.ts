import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import cartReducer from './cartSlice'
import useReducer from './userSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer,
    user: useReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
