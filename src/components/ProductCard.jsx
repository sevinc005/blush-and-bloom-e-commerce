import React from 'react';

export const ProductCard = ({ product, onAddToCart, onToggleFavorite, isFavorite }) => {
  const rating = product.rating 
    ? Number(product.rating).toFixed(1) 
    : (4.0 + (product.id % 10) * 0.1).toFixed(1);

  const getBadge = (id) => {
    if (id % 5 === 0) return { text: 'BESTSELLER', class: 'badge-bestseller' };
    if (id % 3 === 0) return { text: 'NEW', class: 'badge-new' };
    if (id % 2 === 0) return { text: '-15%', class: 'badge-discount' };
    return { text: 'NEW', class: 'badge-new' };
  };

  const badge = getBadge(product.id);

  return (
    <div 
      className="product-card"
      style={{
        width: '100%',
        maxWidth: '280px',
        background: '#ffffff',
        border: '1.5px solid #f8e5eb',
        borderRadius: '28px',
        padding: '14px',
        boxShadow: '0 8px 20px rgba(240, 180, 200, 0.12)',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        margin: '0 auto'
      }}
    >
      {/* Şəkil Qutusu  */}
      <div 
        className="product-card-img-box"
        style={{
          position: 'relative',
          width: '100%',
          height: '220px',
          backgroundColor: '#fdf2f5',
          borderRadius: '22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden' 
        }}
      >
        {badge && (
          <span className={`product-badge ${badge.class}`}>
            {badge.text}
          </span>
        )}

        <button 
          className={`product-fav-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(product)}
          title="Favorit"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? '#e65c7b' : 'none'} stroke="#e65c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        {/* Məhsul Şəkli - Inline Ölçü Limiti ilə */}
        <img 
          src={product.api_featured_image || product.image_link} 
          alt={product.name} 
          className="product-card-img"
          style={{
            maxWidth: '180px',
            maxHeight: '180px',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto',
            mixBlendMode: 'multiply'
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/250x250?text=Blush+%26+Bloom';
          }}
        />
      </div>

      {/* Məlumat Hissəsi */}
      <div className="product-card-content" style={{ padding: '12px 4px 4px 4px' }}>
        <div className="product-card-top-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <span className="product-brand" style={{ fontSize: '0.78rem', fontWeight: '700', color: '#e65c7b', textTransform: 'uppercase' }}>
            {product.brand || 'COLOURPOP'}
          </span>
          <div className="product-rating-badge" style={{ backgroundColor: '#fff8e5', padding: '3px 8px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#e0ab2b', fontSize: '0.85rem' }}>★</span>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#332d2d' }}>{rating}</span>
          </div>
        </div>

        <h3 className="product-card-title" style={{ fontSize: '1.05rem', fontWeight: '800', color: '#2c2523', margin: '4px 0 6px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {product.name}
        </h3>

        <div className="product-price-tag" style={{ fontSize: '1.05rem', fontWeight: '800', color: '#e65c7b', marginBottom: '12px' }}>
          {product.price && product.price !== "0.0" ? `${Number(product.price).toFixed(2)} AZN` : '5.50 AZN'}
        </div>

        <button 
          className="product-add-btn"
          onClick={() => onAddToCart(product)}
          style={{
            width: '100%',
            height: '42px',
            backgroundColor: '#e65c7b',
            border: 'none',
            borderRadius: '14px',
            color: '#ffffff',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span>Səbətə At</span>
        </button>
      </div>
    </div>
  );
};