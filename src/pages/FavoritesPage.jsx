import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

export function FavoritesPage({ favorites, onAddToCart, onToggleFavorite }) {
  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>❤️ Bəyəndiyiniz Məhsullar</h2>

      {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <p>Hələ ki bəyəndiyiniz məhsul yoxdur.</p>
          <Link to="/" style={{ color: '#ff69b4', fontWeight: 'bold' }}>
            Məhsulları kəşf edin →
          </Link>
        </div>
      ) : (
        <div className="products-grid">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}