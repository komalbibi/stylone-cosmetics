import React from 'react';
import { X, Star, ShoppingCart, CheckCircle, ShieldCheck, Heart } from 'lucide-react';

export default function ProductQuickViewModal({ product, onClose, onAddToCart, onAddToWishlist, isWishlisted }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '680px',
          padding: '32px',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <X size={18} color="#64748b" />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', alignItems: 'center' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', background: '#f8faf7', border: '1px solid #e2e8f0' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
          </div>

          <div>
            <span className="badge-tag badge-green" style={{ marginBottom: '8px' }}>
              {product.category}
            </span>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
              {product.name}
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', color: '#f59e0b' }}>
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>{product.rating}</span>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>({product.reviewCount} reviews)</span>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
              {product.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '24px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#15803d' }}>₹{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span style={{ fontSize: '1rem', color: '#94a3b8', textDecoration: 'line-through' }}>₹{product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className="btn-primary"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button
                onClick={() => onAddToWishlist(product.id)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '24px',
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Heart size={20} color={isWishlisted ? '#ef4444' : '#64748b'} fill={isWishlisted ? '#ef4444' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
