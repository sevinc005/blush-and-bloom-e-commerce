import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

// TanStack Query tənzimləmələri
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 dəqiqə ərzində məlumatlar "təzə" sayılır və təkrar API sorğusu atılmır
      cacheTime: 1000 * 60 * 30, // 30 dəqiqə keşdə saxlanılır
      refetchOnWindowFocus: false, // Başqa taba keçib qayıdanda gərəksiz yükləmənin qarşısını alır
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);