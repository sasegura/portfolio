// Author page sections
import Profile from 'pages/Author/sections/Profile'
import Posts from 'pages/Author/sections/Posts'
import Contact from 'pages/Author/sections/Contact'
import { SwipeableMobileStepper } from './sections/Carousel'

function Author() {
  return (
    <>
      <Profile />
      <Posts />
      {/* <Contact /> */}
    </>
  )
}

export default Author
