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

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'

// Material Kit 2 React components
import MKBox from 'components/MKBox'
import MKAvatar from 'components/MKAvatar'
import MKButton from 'components/MKButton'
import MKTypography from 'components/MKTypography'

// Images
import profilePicture from 'assets/images/author.jpeg'

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 8 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Sergio Antonio Segura Fernández</MKTypography>
                {/* <MKButton variant="outlined" color="info" size="small">
                  Follow
                </MKButton> */}
              </MKBox>
              {/* <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid> */}
              <MKTypography variant="body1" fontWeight="light" color="text">
                As a passionate frontend developer, my goal is to create exceptional and functional web experiences. I
                am dedicated to contributing my expertise in HTML, CSS, JavaScript, and frameworks like React to
                innovative rojects. <br />
                With a constant drive to learn and grow in this ever-evolving España field, I aim to translate designs
                into captivating and responsive user interfaces, enhancing the user experience and making a positive
                impact on every project I am part of. <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Profile
