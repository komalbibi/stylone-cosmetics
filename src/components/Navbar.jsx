import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, Heart, Menu, X, Leaf, HelpCircle } from 'lucide-react';

export default function Navbar({ cartCount, wishlistCount, onOpenCart, onOpenQuiz, onSearchChange, searchTerm }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 900, backgroundColor: '#ffffff' }}>
      {/* Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #14532d 0%, #15803d 50%, #166534 100%)',
        color: '#ffffff',
        fontSize: '0.82rem',
        fontWeight: '500',
        padding: '7px 16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}>
        <Sparkles size={14} color="#86efac" />
        <span>Use code <strong>STYLONE20</strong> for 20% OFF | Free Delivery across Pakistan on orders over Rs. 1000</span>
        <span style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '0.75rem',
          marginLeft: '8px',
          cursor: 'pointer'
        }} onClick={onOpenQuiz}>
          Take Hair Quiz ✨
        </span>
      </div>

      {/* Main Navigation */}
      <div style={{
        borderBottom: '1px solid #e2e8f0',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px'
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #22c55e, #15803d)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(34, 197, 94, 0.3)'
            }}>
              <Leaf size={24} color="#ffffff" />
            </div>
            <div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1.45rem',
                fontWeight: '800',
                color: '#15803d',
                letterSpacing: '-0.5px',
                lineHeight: 1
              }}>
                Stylone
              </div>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: '700',
                letterSpacing: '1.5px',
                color: '#475569',
                textTransform: 'uppercase',
                marginTop: '2px'
              }}>
                Cosmocceuticals
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
            <a href="#hero" style={{ fontWeight: '500', fontSize: '0.92rem', color: '#1e293b' }}>Strong Apple Shampoo</a>
            <a href="#ingredients" style={{ fontWeight: '500', fontSize: '0.92rem', color: '#1e293b' }}>Key Ingredients</a>
            <a href="#catalog" style={{ fontWeight: '500', fontSize: '0.92rem', color: '#1e293b' }}>Product Range</a>
            <a href="#clinical" style={{ fontWeight: '500', fontSize: '0.92rem', color: '#1e293b' }}>Clinical Proof</a>
            <a href="#reviews" style={{ fontWeight: '500', fontSize: '0.92rem', color: '#1e293b' }}>Reviews</a>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Search Input Toggle */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {searchOpen ? (
                <div style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', borderRadius: '20px', padding: '4px 12px' }}>
                  <Search size={16} color="#64748b" />
                  <input
                    type="text"
                    placeholder="Search shampoo, amla..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      padding: '6px 8px',
                      fontSize: '0.85rem',
                      outline: 'none',
                      width: '160px'
                    }}
                    autoFocus
                  />
                  <X size={16} color="#64748b" style={{ cursor: 'pointer' }} onClick={() => { setSearchOpen(false); onSearchChange(''); }} />
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  style={{ background: '#f8faf7', border: '1px solid #e2e8f0', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  title="Search Products"
                >
                  <Search size={18} color="#334155" />
                </button>
              )}
            </div>

            {/* Hair Quiz Button */}
            <button
              onClick={onOpenQuiz}
              style={{
                background: 'rgba(34, 197, 94, 0.1)',
                color: '#15803d',
                border: '1px solid #bbf7d0',
                borderRadius: '20px',
                padding: '7px 14px',
                fontSize: '0.82rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <HelpCircle size={15} />
              <span>Hair Quiz</span>
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              style={{
                background: 'linear-gradient(135deg, #15803d, #166534)',
                color: '#ffffff',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '600',
                fontSize: '0.88rem',
                boxShadow: '0 4px 12px rgba(21, 128, 61, 0.25)',
                position: 'relative'
              }}
            >
              <ShoppingBag size={18} />
              <span>Cart</span>
              <span style={{
                background: '#22c55e',
                color: '#ffffff',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700'
              }}>
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
