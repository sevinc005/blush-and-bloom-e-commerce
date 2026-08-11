import React, { useState, useEffect } from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { Sidebar } from '../components/Sidebar';
import { ProductCard } from '../components/ProductCard';

export function HomePage({
  selectedBrand,
  onSelectBrand,
  products,
  loading,
  isFetching,
  searchTerm,
  favorites,
  onAddToCart,
  onToggleFavorite,
}) {
  
  const [visibleCount, setVisibleCount] = useState(16);
  useEffect(() => {
    setVisibleCount(16);
  }, [selectedBrand, searchTerm]);

  // "Daha çox" düyməsinə basıldıqda 16 dənə də artır
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 16);
  };

  // Ekranda yalnız visibleCount qədər məhsul göstərilir
  const displayedProducts = products.slice(0, visibleCount);

  return (
    <>
      <HeroSlider />
      <div className="main-layout">
        <Sidebar
          selectedBrand={selectedBrand}
          onSelectBrand={onSelectBrand}
        />

        <main className="content-area">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0 }}>
              {searchTerm.trim() !== ''
                ? `"${searchTerm}" üzrə axtarış nəticələri`
                : selectedBrand === 'all'
                ? 'Tövsiyə Olunan Məhsullar'
                : `${selectedBrand.toUpperCase()} Məhsulları`}
            </h2>
            {/* Arxa planda məlumat yenilənərkən görünən kiçik indikator */}
            {!loading && isFetching && (
              <span style={{ fontSize: '0.85rem', color: '#D5306D', fontWeight: '500' }}>
                Yenilənir... ✨
              </span>
            )}
          </div>

          {loading ? (
            <div className="loading-text">Məhsullar yüklənir... ✨</div>
          ) : products.length > 0 ? (
            <>
              <div className="products-grid">
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onToggleFavorite={onToggleFavorite}
                    isFavorite={favorites.some((f) => f.id === product.id)}
                  />
                ))}
              </div>

              {visibleCount < products.length && (
                <div style={{ textAlign: 'center', margin: '2.5rem 0 1rem 0' }}>
                  <button
                    onClick={handleLoadMore}
                    type="button"
                    style={{
                      padding: '12px 30px',
                      backgroundColor: '#FFE5EC',
                      color: '#D81B60',
                      border: '1px solid #FF4D6D',
                      borderRadius: '25px',
                      fontSize: '0.95rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 10px rgba(216, 27, 96, 0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#FF4D6D';
                      e.target.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#FFE5EC';
                      e.target.style.color = '#D81B60';
                    }}
                  >
                    Daha çox məhsul göstər ✨ ({products.length - visibleCount} qaldı)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="error-text">Məhsul tapılmadı.</div>
          )}
        </main>
      </div>
    </>
  );
}