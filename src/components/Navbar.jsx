import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, CircleUser } from 'lucide-react';
import '../styles/navbar.css';
import logoImg from '../assets/logo.png';

// Qəbul etdiyimiz props-lara selectedCategory və onSelectCategory əlavə olundu
export const Navbar = ({ 
  searchTerm, 
  onSearchChange, 
  cartCount, 
  favCount,
  selectedCategory,
  onSelectCategory 
}) => {
  
  // Kateqoriya siyahısı və API parametrləri
 const categories = [
  { id: 'all', label: 'ALL' },
  { id: 'blush', label: 'BLUSH' },
  { id: 'lipstick', label: 'LIPSTICK' },
  { id: 'foundation', label: 'FOUNDATION' },
  { id: 'eyeshadow', label: 'EYESHADOW' },
  { id: 'mascara', label: 'MASCARA' },
  { id: 'eyeliner', label: 'EYELINER' },
  { id: 'nail_polish', label: 'NAIL POLISH' },
];

  return (
    <header className="navbar-wrapper">
      <div className="navbar-main-block">
        <nav className="navbar-container">
          
          {/* Sol: Loqo */}
          <div className="navbar-left">
            <Link to="/" className="brand-logo-link">
              <div className="brand-badge">
                <img src={logoImg} alt="Blush & Bloom" className="badge-icon" />
                <div className="badge-text-group">
                  <h1 className="badge-title">
                    Blush <span className="ampersand">&</span> Bloom
                  </h1>
                  <div className="badge-divider">
                    <span className="divider-line"></span>
                    <span className="heart-accent">♥</span>
                    <span className="divider-line"></span>
                  </div>
                  <p className="badge-subtitle">BEAUTY • CARE</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Şaquli Arakəsmə Xətti */}
          <div className="nav-vertical-divider"></div>

          {/* Mərkəz: Axtarış */}
          <div className="navbar-center">
            <div className="nav-search-container">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
              />
              <Search size={18} className="search-icon-inside" />
            </div>
          </div>

          {/* Şaquli Arakəsmə Xətti */}
          <div className="nav-vertical-divider"></div>

          {/* Sağ: İkonlar */}
          <div className="navbar-right">
            <div className="nav-actions-group">
              
              {/* SƏBƏT */}
              <Link to="/cart" className="action-item" title="Səbətim">
                <div className="icon-wrapper">
                  <ShoppingBag size={26} className="bag-icon-pink" />
                  {cartCount > 0 && <span className="badge-count pink-badge">{cartCount}</span>}
                </div>
                <span className="action-label">SƏBƏT</span>
              </Link>

              {/* İkonlar arası xətt */}
              <div className="action-sub-divider"></div>

              {/* FAVORITES */}
              <Link to="/favorites" className="action-item" title="Bəyəndiklərim">
                <div className="icon-wrapper">
                  <Heart size={26} className="heart-icon-pink" />
                  {favCount > 0 && <span className="badge-count fav-badge">{favCount}</span>}
                </div>
                <span className="action-label">FAVORITES</span>
              </Link>

              {/* İkonlar arası xətt */}
              <div className="action-sub-divider"></div>

              {/* ACCOUNT */}
              <Link to="/account" className="action-item" title="Hesabım">
                <div className="icon-wrapper">
                  <CircleUser size={28} className="user-icon-pink" />
                </div>
                <span className="action-label">ACCOUNT</span>
              </Link>

            </div>
          </div>

        </nav>

        <div className="categories-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};