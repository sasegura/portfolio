// @mui material components
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'

// Material Kit 2 React components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

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
              width="90%"
              height="200px"
              position="relative"
              zIndex={1}
            />
          </MKBox>
        </MuiLink>
        <MKBox p={2}>
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

export default JobCard
