/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import translations from 'assets/images/bg-coworking.jpeg'
import todoList from 'assets/images/examples/testimonial-6-2.jpg'

const imagesPrefix =
  'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation'

export default [
  {
    image: `${imagesPrefix}/pages/about-us.jpg`,
    name: 'ReactQuery',
    route: '/reactquery'
  },
  {
    image: todoList,
    name: 'Todo List with Redux toolkit',
    route: '/todolist'
  },
  {
    image: `${imagesPrefix}/account/signin-basic.jpg`,
    name: 'Sign In Page with Formik',
    route: '/signupformik'
  },
  {
    image: `${imagesPrefix}/pages/author.jpg`,
    name: 'Author Page',
    route: '/author'
  },
  {
    image: translations,
    name: 'Translation Page',
    route: '/translations'
  }
]
