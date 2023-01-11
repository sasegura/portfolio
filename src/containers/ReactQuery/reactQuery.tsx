import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import Grid from '@mui/material/Grid';
import CircularIndeterminate from './CircularIndeterminate';
import ProductCard from './ProductCard';
import { Typography } from '@mui/material';

// Create a client
const queryClient = new QueryClient();

function Todos() {
  const getTodos = async () => {
    const a = await fetch('https://fakestoreapi.com/products').then(
      async (response) => response.json()
    );
    return a;
  };

  // Queries
  const products = useQuery({ queryKey: ['todos'], queryFn: getTodos });

  return (
    <div>
      <ul>
        <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1 }}
          justifyContent="center"
        >
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
  );
}

function ReactQuery() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}
export default ReactQuery;
