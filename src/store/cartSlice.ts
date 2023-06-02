import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../interfaces'

type initialStateType = {
  products: Product[]
}

const products: Product[] = []

const initialState: initialStateType = {
  products
}

export const cartSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.products.push(action.payload)
    },
    removeCart: (state, action) => {
      state.products = state.products.filter(todo => todo.id !== action.payload)
    },
    clearCart: (state, action) => {
      state.products = []
    },
    toogleTodo: (state, action) => {
      const temp: any = state.products.find(todo => todo.id === action.payload)
      temp.toogle = !temp.toogle
      state.products = state.products.map(todo => (todo.id === action.payload ? temp : todo))
    }
  }
})

export const { addCart, removeCart, toogleTodo, clearCart } = cartSlice.actions

export default cartSlice.reducer
