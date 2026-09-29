import React, { useState } from 'react';
import { products } from '../data/products';
import { ShoppingCart, Star, Eye, Heart, Sparkles, Filter } from 'lucide-react';

export default function ProductCatalog({ onAddToCart, onQuickView, onAddToWishlist, wishlistedIds, searchTerm }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Anti-Hair Fall', 'Serums & Tonics', 'Conditioners & Masks'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" style={{ padding: '72px 0', backgroundColor: '#f8faf7' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <span className="badge-tag badge-green" style={{ marginBottom: '10px' }}>
            <Sparkles size={12} /> Cosmocceutical Store
          </span>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '800', color: '#0f172a' }}>
            Explore Our Herbal Hair Care Collection
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '8px', maxWidth: '600px' }}>
            Every product is enriched with natural green apple extracts, amla, reetha, or shikakai for root-to-tip vitality.
          </p>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginTop: '28px'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? '#15803d' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#334155',
                  border: selectedCategory === cat ? '1px solid #15803d' : '1px solid #cbd5e1',
                  padding: '10px 20px',
                  borderRadius: '24px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: selectedCategory === cat ? '0 4px 12px rgba(21, 128, 61, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {filteredProducts.map((product) => {
            const isWish = wishlistedIds.includes(product.id);
            return (
              <div
                key={product.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(21, 128, 61, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
                }}
              >
                {/* Badge Tag */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  zIndex: 2
                }}>
                  <span className="badge-tag badge-green" style={{ fontSize: '0.72rem' }}>
                    {product.badge}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => onAddToWishlist(product.id)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#ffffff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <Heart size={16} color={isWish ? '#ef4444' : '#64748b'} fill={isWish ? '#ef4444' : 'none'} />
                </button>

                {/* Product Image */}
                <div
                  onClick={() => onQuickView(product)}
                  style={{ cursor: 'pointer', overflow: 'hidden', height: '260px', background: '#f8faf7' }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', color: '#f59e0b' }}>
                      <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    </div>
                    <span style={{ fontSize: '0.84rem', fontWeight: '700', color: '#0f172a' }}>{product.rating}</span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>({product.reviewCount})</span>
                  </div>

                  <h3
                    onClick={() => onQuickView(product)}
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: '700',
                      color: '#0f172a',
                      lineHeight: 1.35,
                      marginBottom: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    {product.name}
                  </h3>

                  <p style={{
                    fontSize: '0.84rem',
                    color: '#64748b',
                    lineHeight: 1.4,
                    marginBottom: '16px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {product.shortDesc}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#15803d' }}>
                        Rs. {product.price}
                      </div>
                      {product.originalPrice && (
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', textDecoration: 'line-through' }}>
                          Rs. {product.originalPrice}
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => onQuickView(product)}
                        style={{
                          background: '#f1f5f9',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#475569'
                        }}
                        title="Quick View"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        className="btn-primary"
                        onClick={() => onAddToCart(product)}
                        style={{ padding: '9px 14px', fontSize: '0.84rem' }}
                      >
                        <ShoppingCart size={16} /> Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
