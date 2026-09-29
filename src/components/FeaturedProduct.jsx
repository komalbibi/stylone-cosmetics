import React, { useState } from 'react';
import { ShoppingCart, Star, CheckCircle, RefreshCw, Zap, Truck, ShieldCheck, Heart } from 'lucide-react';

export default function FeaturedProduct({ product, onAddToCart, onBuyNow, onAddToWishlist, isWishlisted }) {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('ingredients');

  const currentSizeObj = product.sizes ? product.sizes[selectedSizeIndex] : { size: '200ml', price: product.price };
  const basePrice = currentSizeObj.price;
  const finalPrice = isSubscribe ? (basePrice * 0.85).toFixed(2) : basePrice.toFixed(2);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedSize: currentSizeObj.size,
      price: parseFloat(finalPrice),
      isSubscribe,
      quantity
    });
  };

  const handleBuyNow = () => {
    onBuyNow({
      ...product,
      selectedSize: currentSizeObj.size,
      price: parseFloat(finalPrice),
      isSubscribe,
      quantity
    });
  };

  return (
    <section id="hero-detail" style={{ padding: '64px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div style={{
          textIndent: 0,
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <span className="badge-tag badge-green" style={{ marginBottom: '8px' }}>
            Flagship Cosmocceutical Product
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' }}>
            Stylone 'Strong Apple' Anti-Hair Fall Shampoo
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '640px', margin: '8px auto 0' }}>
            Dermatologically crafted formula enriched with Amla, Reetha, Shikakai, and cold-pressed Green Apple polyphenols.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '48px',
          alignItems: 'start'
        }}>
          {/* Left Gallery / Main Image */}
          <div>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#f8faf7',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              position: 'relative'
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
              <button
                onClick={() => onAddToWishlist(product.id)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
              >
                <Heart size={20} color={isWishlisted ? '#ef4444' : '#64748b'} fill={isWishlisted ? '#ef4444' : 'none'} />
              </button>
            </div>

            {/* Quick Feature Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginTop: '20px'
            }}>
              <div style={{ background: '#f0fdf4', padding: '14px 10px', borderRadius: '12px', textAlign: 'center' }}>
                <ShieldCheck size={22} color="#15803d" style={{ margin: '0 auto 4px' }} />
                <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#14532d' }}>Dermatologist Approved</div>
              </div>
              <div style={{ background: '#f0fdf4', padding: '14px 10px', borderRadius: '12px', textAlign: 'center' }}>
                <Zap size={22} color="#15803d" style={{ margin: '0 auto 4px' }} />
                <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#14532d' }}>94% Shedding Control</div>
              </div>
              <div style={{ background: '#f0fdf4', padding: '14px 10px', borderRadius: '12px', textAlign: 'center' }}>
                <Truck size={22} color="#15803d" style={{ margin: '0 auto 4px' }} />
                <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#14532d' }}>Fast Express Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Product Buying Controls */}
          <div>
            {/* Rating & Review Counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', color: '#f59e0b' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span style={{ fontWeight: '700', fontSize: '0.92rem', color: '#0f172a' }}>{product.rating}</span>
              <span style={{ color: '#64748b', fontSize: '0.88rem' }}>({product.reviewCount} verified reviews)</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
              {product.name}
            </h3>

            <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {product.description}
            </p>

            {/* Size Selector */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1e293b', marginBottom: '10px' }}>
                Select Special Bundle Deal (200ml Bottle):
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {product.sizes.map((sObj, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSizeIndex(idx)}
                    style={{
                      background: selectedSizeIndex === idx ? '#f0fdf4' : '#ffffff',
                      border: selectedSizeIndex === idx ? '2px solid #15803d' : '1px solid #cbd5e1',
                      color: selectedSizeIndex === idx ? '#15803d' : '#334155',
                      padding: '10px 16px',
                      borderRadius: '12px',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    {sObj.size} — Rs. {sObj.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase Mode Toggle (One-Time vs Subscribe & Save) */}
            <div style={{
              background: '#f8faf7',
              border: '1px solid #bbf7d0',
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '28px'
            }}>
              <div
                onClick={() => setIsSubscribe(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  background: !isSubscribe ? '#ffffff' : 'transparent',
                  border: !isSubscribe ? '1px solid #15803d' : '1px solid transparent',
                  cursor: 'pointer',
                  marginBottom: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="radio" checked={!isSubscribe} onChange={() => setIsSubscribe(false)} />
                  <span style={{ fontSize: '0.92rem', fontWeight: '600', color: '#1e293b' }}>One-time Purchase</span>
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#15803d' }}>
                  Rs. {basePrice}
                </span>
              </div>

              <div
                onClick={() => setIsSubscribe(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  background: isSubscribe ? '#ffffff' : 'transparent',
                  border: isSubscribe ? '1px solid #15803d' : '1px solid transparent',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="radio" checked={isSubscribe} onChange={() => setIsSubscribe(true)} />
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#15803d' }}>
                      Subscribe & Save 15% ⚡
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Delivered automatically every 30 days. Cancel anytime.</div>
                  </div>
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#15803d' }}>
                  Rs. {(basePrice * 0.85).toFixed(0)}
                </span>
              </div>
            </div>

            {/* Quantity Stepper & Buttons */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '32px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #cbd5e1',
                borderRadius: '12px',
                background: '#ffffff',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '40px', height: '44px', background: '#f8faf7', fontSize: '1.2rem', fontWeight: '700', color: '#334155' }}
                >
                  -
                </button>
                <span style={{ width: '44px', textAlign: 'center', fontWeight: '700', fontSize: '1rem' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: '40px', height: '44px', background: '#f8faf7', fontSize: '1.2rem', fontWeight: '700', color: '#334155' }}
                >
                  +
                </button>
              </div>

              <button
                className="btn-primary"
                onClick={handleAddToCart}
                style={{ flex: 1, padding: '14px 20px', fontSize: '1rem', justifyContent: 'center' }}
              >
                <ShoppingCart size={18} /> Add to Cart (Rs. {(parseFloat(finalPrice) * quantity).toFixed(0)})
              </button>

              <button
                className="btn-secondary"
                onClick={handleBuyNow}
                style={{ padding: '14px 20px', fontSize: '0.95rem' }}
              >
                Buy Now
              </button>
            </div>

            {/* Interactive Detail Tabs */}
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '16px' }}>
                {[
                  { id: 'ingredients', label: 'Key Ingredients' },
                  { id: 'howToUse', label: 'How to Use' },
                  { id: 'clinical', label: 'Clinical Study' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '6px 4px',
                      fontSize: '0.92rem',
                      fontWeight: activeTab === tab.id ? '700' : '500',
                      color: activeTab === tab.id ? '#15803d' : '#64748b',
                      borderBottom: activeTab === tab.id ? '2.5px solid #15803d' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 'ingredients' && (
                <ul style={{ listStyle: 'none', display: 'grid', gap: '8px' }}>
                  {product.ingredients.map((ing, i) => (
                    <li key={i} style={{ fontSize: '0.88rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={15} color="#22c55e" /> {ing}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'howToUse' && (
                <div style={{ display: 'grid', gap: '8px' }}>
                  {product.howToUse.map((step, i) => (
                    <p key={i} style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>{step}</p>
                  ))}
                </div>
              )}

              {activeTab === 'clinical' && (
                <div style={{ display: 'grid', gap: '10px' }}>
                  {product.clinicalResults.map((c, i) => (
                    <div key={i} style={{ background: '#f0fdf4', padding: '10px 14px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#15803d' }}>{c.stat}</span>
                      <span style={{ fontSize: '0.84rem', color: '#14532d', fontWeight: '500' }}>{c.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
