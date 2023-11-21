import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Grid from '@mui/material/Grid'
import CircularIndeterminate from './Components/CircularIndeterminate'
import ProductCard from './Components/ProductCard'
import { Typography } from '@mui/material'
import PagesLayout from '../../components/Page'

function Todos() {
  const getTodos = async () => {
    const a = await fetch('https://fakestoreapi.com/products').then(async response => response.json())
    return a
  }

  // Queries
  const products = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  return (
    <div>
      <ul>
        <Grid container spacing={2} sx={{ flexGrow: 1 }} justifyContent="center">
          {products.status !== 'loading' ? (
            products.error instanceof Error ? (
              <Typography variant="h5" component="div">
                {products.error.message}
              </Typography>
            ) : (
              products.data.map((todo: any) => (
                <Grid key={todo.id} item xs={4}>
                  <ProductCard product={todo} />
                </Grid>
              ))
            )
          ) : (
            <CircularIndeterminate />
          )}
        </Grid>
      </ul>
    </div>
  )
}

function ReactQuery() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <PagesLayout
        title={'React Query / TanStack Query'}
        text={'Obtención de datos de una api externa utilizando ReactQuery como gestor de estados del servidor.'}
      >
        <Todos />
      </PagesLayout>
    </QueryClientProvider>
  )
}
export default ReactQuery
