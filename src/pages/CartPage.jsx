import React from 'react';
import { Link } from 'react-router-dom';

export function CartPage({ cart, onRemoveFromCart }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + (parseFloat(item.price) || 0) * item.qty,
    0
  );

  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>🛒 Səbətiniz</h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <p>Səbətiniz boşdur.</p>
          <Link to="/" style={{ color: '#ff69b4', fontWeight: 'bold' }}>
            Məhsullara baxın →
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                }}
              >
                <img
                  src={item.api_featured_image}
                  alt={item.name}
                  style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px' }}
                />
                <div style={{ flex: 1, marginLeft: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.name}</h4>
                  <p style={{ margin: 0, color: '#666' }}>
                    {item.price ? `$${item.price}` : 'Qiymət göstərilməyib'} × {item.qty}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  style={{
                    background: '#ff4d4d',
                    color: '#fff',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Sil
                </button>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '2px solid #eee',
              paddingTop: '1.5rem',
            }}
          >
            <h3>Ümumi Məbləğ: ${totalPrice.toFixed(2)}</h3>
            <button
              style={{
                background: '#4CAF50',
                color: '#fff',
                border: 'none',
                padding: '0.8rem 1.8rem',
                fontSize: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Sifarişi Tamamla
            </button>
          </div>
        </div>
      )}
    </div>
  );
}