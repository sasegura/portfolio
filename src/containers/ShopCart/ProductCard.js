import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../store/cartSlice'

const ProductCard = ({ product }) => {
  const { title, image, category, price } = product
  const dispatch = useDispatch()
  const productsOnCart = useSelector(state => state.cart.products)

  const addToCart = () => {
    if (productsOnCart.length === 0) {
      dispatch(addCart(product))
    } else {
      if (!productsOnCart.find(prod => prod.id === product.id)) dispatch(addCart(product))
    }
  }

  return (
    <Card>
      <CardMedia component="img" height="300" image={image} alt={title} sx={{ margin: '16px auto', width: 'auto' }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ height: 35, overflow: 'hidden' }}>
          Título: {title}
        </Typography>
        <Typography variant="h6">Categoría: {category}</Typography>
        <Typography variant="h6">Precio: {price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addToCart}>
          Agregar a la cesta
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
