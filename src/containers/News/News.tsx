import Box from '@mui/material/Box'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'

import { Todo } from '../../interfaces'
import { AddForm } from '../../components/AddForm'
import TodoItem from '../../components/TodoItem'
import { useAction, useAppSelector } from '../../hooks/useAction'
import CircularIndeterminate from '../ReactQuery/CircularIndeterminate'
import { Grid, Typography } from '@mui/material'
import ProductCard from './ProductCard'

function News() {
  const queryClient = new QueryClient()

  const count = useAppSelector((state: any) => state.todo.count)
  const todos = useAppSelector((state: any) => state.todo.todos)

  const { handleTodoToogle, handleTodoDone } = useAction()
  const getNews = async () => {
    const a = await fetch('https://newsapi.org/v2/everything?q=football&apiKey=69ce5ef7a93e408a9d24ddf51f2b1ff1').then(
      async response => response.json()
    )
    console.log(a)
    return a
  }

  const news = useQuery({ queryKey: ['news'], queryFn: getNews })

  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ padding: '10px', margin: '0 auto' }}>
        <Box sx={{ width: '100%' }}>
          <AddForm />
        </Box>

        <TableContainer component={Paper}>
          {news.status !== 'loading' ? (
            news.error instanceof Error ? (
              <Typography variant="h5" component="div">
                {news.error.message}
              </Typography>
            ) : (
              news.data.articles.map((todo: Todo) => (
                <Grid key={todo.id} item xs={4}>
                  <ProductCard product={todo} />
                </Grid>
              ))
            )
          ) : (
            <CircularIndeterminate />
          )}
          {count === 0 && <p>No todos</p>}
        </TableContainer>
      </Box>
    </QueryClientProvider>
  )
}

export default News
