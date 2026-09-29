import React from 'react';
import { ShoppingCart, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, HeartHandshake, Leaf } from 'lucide-react';

export default function HeroBanner({ heroProduct, onAddToCart, onOpenQuiz }) {
  return (
    <section id="hero" style={{
      background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)',
      padding: '48px 0 64px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative ambient blurred circles */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(34, 197, 94, 0.12)',
        filter: 'blur(60px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column: Product Info & Selling Points */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="badge-tag badge-green">
                <Leaf size={12} /> Cosmocceutical Innovation
              </span>
              <span className="badge-tag badge-gold">
                <Sparkles size={12} /> #1 Anti-Hair Fall Formula
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
              fontWeight: '800',
              color: '#0f172a',
              letterSpacing: '-1px',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}>
              STRENGTHEN & NOURISH <span style={{ color: '#15803d', background: 'linear-gradient(120deg, #15803d, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>YOUR HAIR</span>
            </h1>

            <p style={{
              fontSize: '1.08rem',
              color: '#334155',
              lineHeight: 1.6,
              marginBottom: '24px',
              fontWeight: '400'
            }}>
              Meet our new <strong>‘Strong Apple’ Anti-Hair Fall</strong> formula. A potent pharmaceutical-grade herbal blend featuring <strong>Amla, Reetha, Shikakai</strong>, and the refreshing antioxidant power of crisp green apple. Designed for all hair types to stop shedding and stimulate natural root vitality.
            </p>

            {/* Herbal Callout Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              marginBottom: '32px'
            }}>
              {[
                { name: 'Fresh Green Apple', desc: 'Follicle procyanidin boost' },
                { name: 'Organic Amla', desc: 'Vitamin C root strength' },
                { name: 'Natural Reetha', desc: 'Gentle sulfate-free lather' },
                { name: 'Traditional Shikakai', desc: 'Cuticle gloss & detangling' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}>
                  <CheckCircle2 size={18} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1e293b' }}>{item.name}</div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons & Price */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px', marginBottom: '28px' }}>
              <div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#64748b', fontWeight: '600', letterSpacing: '0.5px' }}>
                  200ml Single Bottle
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: '#15803d' }}>Rs. {heroProduct.price}</span>
                  <span style={{ fontSize: '1.1rem', color: '#94a3b8', textDecoration: 'line-through' }}>Rs. {heroProduct.originalPrice}</span>
                  <span style={{ fontSize: '0.78rem', background: '#dcfce7', color: '#15803d', fontWeight: '700', padding: '2px 8px', borderRadius: '8px' }}>
                    SAVE 21%
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary"
                  onClick={() => onAddToCart(heroProduct)}
                  style={{ padding: '14px 28px', fontSize: '1rem' }}
                >
                  <ShoppingCart size={20} /> Add Hero Bottle To Cart
                </button>
                <button
                  className="btn-secondary"
                  onClick={onOpenQuiz}
                  style={{ padding: '14px 22px', fontSize: '0.92rem' }}
                >
                  Hair Diagnosis Quiz <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              paddingTop: '20px',
              borderTop: '1px solid #e2e8f0',
              fontSize: '0.82rem',
              color: '#475569'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#15803d" /> Dermatologically Approved
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HeartHandshake size={16} color="#15803d" /> Paraben & Sulfate Free
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Leaf size={16} color="#15803d" /> 100% Herbal Actives
              </span>
            </div>
          </div>

          {/* Right Column: Hero Product Image Display */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* White Marble Aesthetic Card container */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(21, 128, 61, 0.15)',
              background: '#ffffff',
              border: '4px solid #ffffff'
            }}>
              <img
                src={heroProduct.image}
                alt="Stylone Strong Apple Anti Hair Fall Shampoo"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* Floating Product Tag */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(10px)',
                padding: '14px 18px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)'
              }}>
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#15803d' }}>
                    Stylone Strong Apple
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    With Amla, Reetha, Shikakai • 200ml
                  </div>
                </div>
                <div style={{
                  background: '#15803d',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '0.85rem',
                  padding: '6px 12px',
                  borderRadius: '20px'
                }}>
                  For All Hair Types
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
