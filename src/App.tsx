import Box from '@mui/material/Box';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import MenuBar from './components/MenuBar';
import AppRoutes from './components/Routes';

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
          height: '100%',
          minHeight: '100vh',
        }}
      >
        <MenuBar />
        <AppRoutes />
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
