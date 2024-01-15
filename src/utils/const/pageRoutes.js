import SignupFormikPage from 'pages/Formik'
import HomePage from 'pages/Home'
import ReactQuery from 'pages/ReactQuery'
import TodosList from 'pages/TodoList'
import Translations from 'pages/Translations'

export const pagesRoutes = [
  { name: 'Home', path: '/', element: <HomePage /> },
  { name: 'ReactQuery', path: '/reactquery', element: <ReactQuery /> },
  { name: 'TodosList', path: '/todolist', element: <TodosList /> },
  { name: 'SignupFormikPage', path: '/signupformik', element: <SignupFormikPage /> },
  { name: 'Translations', path: '/translations', element: <Translations /> }
]
