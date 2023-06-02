import { Box, Grid } from '@mui/material'
import ProductCard from './ProductCard'
import IsLoadding from '../../components/isLoadding'
import { useQuery } from 'react-query'
import { getProducts } from '../../queryFunctions/getProducts'

const Products = () => {
  const products = useQuery({ queryKey: ['todos'], queryFn: getProducts })

  return (
    <Box
      sx={{
        margin: 2,
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <IsLoadding loadding={products.status === 'loading'}>
        <Grid container spacing={2} sx={{ marginBottom: 1 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products?.data?.map(product => (
            <Grid item xs={12} key={product.id} sm={6} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </IsLoadding>
    </Box>
  )
}

export default Products
