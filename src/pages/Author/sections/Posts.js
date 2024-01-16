// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'

// Material Kit 2 React components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

// Images
import post1 from 'assets/images/roiback.jpeg'
import post2 from 'assets/images/knowmad-mood.png'
import post3 from 'assets/images/geoactio.webp'
import post4 from 'assets/images/op2aim.jpeg'
import { useState } from 'react'
import { Card } from '@mui/material'

const JobCard = ({ title, description, image, period, place }) => {
  const [showMore, setShowmore] = useState(false)

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          overflow: 'visible'
        }}
      >
        <MuiLink target="_blank" rel="noreferrer">
          <MKBox position="relative" borderRadius="lg">
            <MKBox
              component="img"
              src={image}
              alt={title}
              borderRadius="lg"
              shadow="md"
              width="100%"
              position="relative"
              zIndex={1}
            />
            <MKBox
              borderRadius="lg"
              shadow="md"
              width="100%"
              height="100%"
              position="absolute"
              left={0}
              top={0}
              sx={{
                backgroundImage: `url(${image})`,
                transform: 'scale(0.94)',
                filter: 'blur(12px)',
                backgroundSize: 'cover'
              }}
            />
          </MKBox>
        </MuiLink>
        <MKBox pt={2} pb={3}>
          <MKTypography variant="h4" gutterBottom>
            {title}
          </MKTypography>
          <MKTypography variant="h6" gutterBottom>
            {place}
          </MKTypography>
          <MKTypography variant="h6" gutterBottom>
            {period}
          </MKTypography>
          <MKTypography variant="body2" component="p" color="text" mb={3}>
            {showMore ? description : description.slice(0, 100)}
          </MKTypography>
          <MKTypography
            component="p"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={'info'}
            onClick={() => setShowmore(prev => !prev)}
            style={{ cursor: 'pointer' }}
          >
            <span style={{ color: 'blue' }}>{showMore ? 'Read less' : 'Read more'}</span>
          </MKTypography>
        </MKBox>
      </Card>
    </Grid>
  )
}

function Places() {
  const jobs = [
    {
      id: 0,
      title: 'Roiback ',
      period: '2023 - 2023',
      place: 'Madrid, España',
      image: post1,
      description:
        'Development and maintenance of the Roiback web application. Development of clean and maintainable code, meeting functional and visual requirements.      -Optimization and/or refactoring of previously developed components.      -Maintenance of the Roiback application.'
    },
    {
      id: 1,
      title: 'Knowmad Mood',
      period: '2022 - 2023',
      place: 'Madrid, España',
      image: post2,
      description:
        "Development and maintenance of custom web applications, for clients across various industries.    Elaboration of clean and maintainable code, meeting the functional and visual requirements                Optimization and/or refactoring of previously developed components.  Development of new functionalities and maintenance of the Applus application (one of the world's leading companies in the inspection, testing and certification sector) using ReactJS.   Implementation of data layers to obtain potentially important information in the Google Tag Manager about the events of users navigating in the application."
    },
    {
      id: 2,
      title: 'Op2aim',
      period: '2021 - 2022',
      place: 'Madrid, España',
      image: post4,
      description:
        'Development and maintenance of the Company application (Cost optimizer for tenders): Elaboration of optimal, maintainable and quality code, adjusting to the functional and visual requirements. Code testing Optimization and/or refactoring of previously developed components. Participation in the design and development of new functionalities.'
    },
    {
      id: 3,
      title: 'Geoactio',
      place: 'Navarra, España',
      period: '2019 - 2021',
      image: post3,
      description:
        'Development and maintenance of custom web applications, for clients in sectors such as transportation, energy and health.    Elaboration of clean and maintainable code, meeting the functional and visual requirements. Optimization and/or refactoring of previously developed components.        Review and approval of the code developed by the rest of the team.'
    }
  ]

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check my latest jobs
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {jobs.map(({ id, title, description, image, period, place }) => (
            <JobCard key={id} title={title} description={description} place={place} image={image} period={period} />
          ))}
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Places
