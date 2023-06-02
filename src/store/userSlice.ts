import { createSlice } from '@reduxjs/toolkit'
import { User } from '../interfaces'

type initialStateType = {
  user: User
}

const user: User = {
  username: '',
  password: '',
  id: 0,
  isLogedIn: false
}

const initialState: initialStateType = {
  user
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = { ...action.payload }
    },
    logoutUser: (state, action) => {
      state.user = { ...user }
    }
  }
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
