import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import IsLoadding from '../../components/isLoadding'
import { useMutation } from 'react-query'
import { loginUserMutation } from '../../queryFunctions/login'
import { loginUser } from '../../store/userSlice'

const defaultValues = {
  username: 'mor_2314',
  password: '83r5^_'
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, watch } = useForm({
    defaultValues
  })

  const {
    mutate,
    isLoading,
    isSuccess,
    data: userData,
    isError,
    loginError
  } = useMutation({
    mutationFn: loginUserMutation
  })

  const onSubmit = data => {
    mutate(data)
  }

  useEffect(() => {
    if (isSuccess) {
      const data = { username: watch('username'), password: watch('password'), id: userData?.token, isLogedIn: true }
      dispatch(loginUser(data))
      navigate('/')
    }
  }, [isSuccess, navigate])

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <IsLoadding loadding={isLoading}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              inputProps={{ ...register('username', { required: true }) }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputProps={{ ...register('password', { required: true }) }}
            />
            {isError ? (
              <Box>
                <Box>{loginError?.message}</Box>
                <Box>username: mor_2314</Box>
                <Box>password: 83r5^_</Box>
              </Box>
            ) : (
              ''
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </form>
        </IsLoadding>
      </Box>
    </Container>
  )
}

export default Login
