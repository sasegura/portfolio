import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useQuery } from 'react-query'

const ProductCard = ({ product }) => {
  const getTodos = async () => {
    const a = await fetch('https://fakestoreapi.com/products').then(async response => response.json())
    return a
  }

  // Queries
  const products = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  return (
    <Box sx={{ width: 500, border: '1px solid', marginBottom: 20 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h5" component="div">
            {product.category}
          </Typography>
          <img src={product.urlToImage} width={' 400px'} alt={product.title} />
        </CardContent>
      </Card>
    </Box>
  )
}
export default ProductCard
