import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge } from '@mui/material'
import { useSelector } from 'react-redux'

export default function MenuBar() {
  const navigate = useNavigate()
  const productsOnCart = useSelector(state => state.cart.products)
  const user = useSelector(state => state.user.user)

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Button variant="text" onClick={() => navigate('/')}>
            Sergio´s Portfolio
          </Button>
        </Typography>
        <nav>
          <Button variant="text" sx={{ my: 1, mx: 1.5 }} onClick={() => navigate('/info')}>
            Info
          </Button>
        </nav>
        {user?.isLogedIn ? (
          <Button variant="text" sx={{ my: 1, mx: 1.5 }} onClick={() => navigate('/logout')}>
            {`Logout ${user?.username}`}
          </Button>
        ) : (
          <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} onClick={() => navigate('/login')}>
            Login
          </Button>
        )}
        <Button color="inherit" onClick={() => navigate('/cart')}>
          <Badge badgeContent={productsOnCart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
