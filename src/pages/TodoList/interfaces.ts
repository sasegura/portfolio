export interface Todo {
  id: number
  text: string
  toogle: boolean
}

export interface Product {
  id: number
  category: string
  description: string
}

export interface User {
  id: number
  isLogedIn: boolean
  username: string
  password: string
}
