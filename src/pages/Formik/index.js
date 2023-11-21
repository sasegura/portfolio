import { useFormik } from 'formik'
import * as Yup from 'yup'
// @mui material components
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Grid from '@mui/material/Grid'

// Material Kit 2 React components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'
import MKInput from 'components/MKInput'
import MKButton from 'components/MKButton'

// react-router-dom components
import { Link } from 'react-router-dom'

const initialValues = {
  password: '',
  email: '',
  rememberMe: false
}

const SignupForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      password: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <MKBox px={1} width="100%" height="100vh" mx="auto">
      <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
        <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
          <Card>
            <MKBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
              mx={2}
              mt={-3}
              p={2}
              mb={1}
              textAlign="center"
            >
              <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                Sign in
              </MKTypography>
            </MKBox>
            <MKBox pt={4} pb={3} px={3}>
              <form onSubmit={formik.handleSubmit}>
                <MKBox mb={2}>
                  <MKInput type="email" label="Email" fullWidth {...formik.getFieldProps('email')} />
                  {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </MKBox>
                <MKBox mb={2}>
                  <MKInput type="password" label="Password" fullWidth {...formik.getFieldProps('password')} />
                  {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </MKBox>
                <MKBox display="flex" alignItems="center" ml={-1}>
                  <Switch {...formik.getFieldProps('rememberMe')} />
                  <MKTypography variant="button" fontWeight="regular" color="text">
                    &nbsp;&nbsp;Remember me
                  </MKTypography>
                </MKBox>
                <MKBox mt={4} mb={1}>
                  <MKButton variant="gradient" color="info" type="submit" fullWidth>
                    sign in
                  </MKButton>
                </MKBox>
                <MKBox mt={3} mb={1} textAlign="center">
                  <MKTypography variant="button" color="text">
                    Don&apos;t have an account?{' '}
                    <MKTypography
                      component={Link}
                      to="/signupformik"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Sign up
                    </MKTypography>
                  </MKTypography>
                </MKBox>
              </form>
            </MKBox>
          </Card>
        </Grid>
      </Grid>
    </MKBox>
  )
}

export default SignupForm
