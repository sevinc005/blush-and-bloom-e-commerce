
import { useQuery } from '@tanstack/react-query';

// API-dən məhsul çəkən funksiya
const fetchProductsByCategory = async (category) => {
  // Kateqoriya 'ALL' və ya boşdursa ümumi endpoint, əks halda kateqoriyaya görə
  const url = category && category !== 'ALL'
    ? `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category.toLowerCase()}`
    : `https://makeup-api.herokuapp.com/api/v1/products.json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Məhsulları yükləmək mümkün olmadı.');
  }
  return response.json();
};

export const useProducts = (selectedCategory) => {
  return useQuery({
    // queryKey: kateqoriya dəyişdikcə TanStack Query avtomatik yeni sorğu atır və ya keşdən gətirir
    queryKey: ['products', selectedCategory],
    queryFn: () => fetchProductsByCategory(selectedCategory),
    keepPreviousData: true, 
  });
};