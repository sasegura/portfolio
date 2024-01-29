// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Material Kit 2 React components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import JobCard from './JobCad'
import { jobs } from '../data/jobsData'

function Places() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check my latest jobs
          </MKTypography>
        </Grid>
        <Carousel responsive={responsive}>
          {jobs.map(({ id, title, description, image, period, place }) => (
            <JobCard key={id} title={title} description={description} place={place} image={image} period={period} />
          ))}
        </Carousel>
      </Container>
    </MKBox>
  )
}

export default Places
