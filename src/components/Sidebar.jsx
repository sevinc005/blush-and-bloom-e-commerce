import React from 'react';
import '../styles/sidebar.css';

export const Sidebar = ({ selectedBrand, onSelectBrand }) => {
  const brands = [
    { id: 'all', name: 'Bütün Məhsullar' },
    { id: 'maybelline', name: 'Maybelline' },
    { id: 'nyx', name: 'NYX' },
    { id: 'covergirl', name: 'CoverGirl' },
    { id: 'l\'oreal', name: 'L\'Oreal' },
    { id: 'clinique', name: 'Clinique' },
    { id: 'dior', name: 'Dior' },
    { id: 'e.l.f.', name: 'E.L.F.' },
  ];

  return (
    <aside className="sidebar">
      <h3>Markalar</h3>
      <ul className="brand-list">
        {brands.map((brand) => (
          <li key={brand.id}>
            <button
              type="button"
              className={`brand-btn ${selectedBrand === brand.id ? 'active' : ''}`}
              onClick={() => onSelectBrand(brand.id)}
            >
              {brand.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};