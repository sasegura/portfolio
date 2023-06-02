import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {  QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import store from './store';

const container = document.getElementById('root')!;
const root = createRoot(container);
// Create a client
const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    
  </Provider>
);
