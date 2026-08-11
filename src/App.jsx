import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { Account } from './pages/Account';
import { fetchProductsByBrand, fetchProductsByCategory } from './services/api';
import './styles/main.css';

const fetchProductsData = async ({ queryKey }) => {
  const [_, { selectedBrand, selectedCategory, searchTerm }] = queryKey;

  if (searchTerm.trim() !== '') {
    const allData = await fetchProductsByBrand('all');
    const q = searchTerm.toLowerCase().trim();
    return allData.filter((item) => {
      const nameMatch = item.name ? item.name.toLowerCase().includes(q) : false;
      const brandMatch = item.brand ? item.brand.toLowerCase().includes(q) : false;
      const typeMatch = item.product_type ? item.product_type.toLowerCase().includes(q) : false;
      return nameMatch || brandMatch || typeMatch;
    });
  }

  if (selectedCategory !== 'all') {
    return await fetchProductsByCategory(selectedCategory);
  }

  return await fetchProductsByBrand(selectedBrand);
};

export function App() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  const { data: products = [], isLoading, isFetching } = useQuery({
    queryKey: ['products', { selectedBrand, selectedCategory, searchTerm }],
    queryFn: fetchProductsData,
    placeholderData: (previousData) => previousData, // Kateqoriya dəyişəndə yeni məlumat gələnədək köhnəni göstərir (ekran sıçramır)
  });

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    if (value.trim() !== '') {
      navigate('/');
    }
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });

    toast.success(`${product.name || 'Məhsul'} səbətə əlavə olundu! 🛍️`, {
      style: {
        border: '1.5px solid #dfc382',
        padding: '12px 20px',
        color: '#2c2523',
        background: '#FAF0F6',
        borderRadius: '20px',
        fontWeight: '600',
        fontSize: '0.85rem',
      },
      iconTheme: {
        primary: '#e05275',
        secondary: '#FFDFE9',
      },
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.error('Məhsul səbətdən silindi!', {
      style: {
        border: '1px solid #ebd0d0',
        padding: '12px 20px',
        color: '#4a3e3d',
        background: '#fff',
        borderRadius: '20px',
        fontSize: '0.85rem',
      },
    });
  };

  const handleToggleFavorite = (product) => {
    const isFav = favorites.some((item) => item.id === product.id);

    setFavorites((prev) => {
      if (isFav) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });

    if (isFav) {
      toast('Favoritlərdən çıxarıldı 💔');
    } else {
      toast('Favoritlərə əlavə olundu! 💖', {
        style: {
          border: '1.5px solid #dfc382',
          padding: '12px 20px',
          color: '#2c2523',
          background: '#FAF0F6',
          borderRadius: '20px',
          fontWeight: '600',
          fontSize: '0.85rem',
        },
      });
    }
  };

  return (
    <div className="app-container">
      <Toaster position="bottom-right" reverseOrder={false} />

      <Navbar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
        favCount={favorites.length}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSelectedBrand('all');
          setSearchTerm('');
          navigate('/');
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              selectedBrand={selectedBrand}
              onSelectBrand={(brand) => {
                setSelectedBrand(brand);
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              products={products}
              loading={isLoading}
              isFetching={isFetching}
              searchTerm={searchTerm}
              favorites={favorites}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage cart={cart} onRemoveFromCart={handleRemoveFromCart} />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;