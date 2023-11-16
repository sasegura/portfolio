// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKTypography from "../MKTypography";
import MKBox from "../MKBox";

function PagesLayout({ title, text, children }) {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {children}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                {title}
              </MKTypography>
              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
              >
                {text}
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PagesLayout;
