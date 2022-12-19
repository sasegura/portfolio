import Box from '@mui/material/Box';

import TodoList from './containers/TodoList/TodoList';

function App() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <TodoList />
    </Box>
  );
}

export default App;
