import React, { useState } from 'react';
import { Leaf, Send, Camera, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8', paddingTop: '64px', paddingBottom: '32px' }}>
      <div className="container">
        {/* Newsletter Box */}
        <div style={{
          background: 'linear-gradient(135deg, #14532d, #15803d)',
          borderRadius: '24px',
          padding: '36px',
          marginBottom: '56px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          color: '#ffffff'
        }}>
          <div>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase' }}>
              Join The Stylone Hair Club
            </span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '8px', color: '#ffffff' }}>
              Get 10% OFF Your First Order
            </h3>
            <p style={{ color: '#dcfce7', fontSize: '0.92rem', marginTop: '4px' }}>
              Subscribe for hair care tips, dermatological advice, and exclusive botanical drops.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '420px' }}>
            {subscribed ? (
              <div style={{ background: '#ffffff', color: '#15803d', padding: '12px 20px', borderRadius: '24px', fontWeight: '700', fontSize: '0.9rem', width: '100%', textAlign: 'center' }}>
                🎉 You're subscribed! Use coupon <strong>WELCOME10</strong>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '12px 18px',
                    borderRadius: '24px',
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#22c55e',
                    color: '#ffffff',
                    border: 'none',
                    padding: '12px 22px',
                    borderRadius: '24px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Send size={16} /> Join
                </button>
              </>
            )}
          </form>
        </div>

        {/* Footer Links Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Leaf size={20} color="#ffffff" />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', fontFamily: "'Outfit', sans-serif" }}>Stylone</span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Pharmaceutical-grade herbal cosmeceuticals engineered for hair strength, scalp balance, and anti-hair fall protection.
            </p>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
              #StyloneCosmocceuticals #HerbalHairCare #AntiHairFall #HealthyHair #StrongApple
            </div>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Product Range</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#hero" style={{ hover: { color: '#ffffff' } }}>Strong Apple Shampoo (200ml)</a></li>
              <li><a href="#catalog">Scalp Revitalizing Serum</a></li>
              <li><a href="#catalog">Amla & Shikakai Hair Mask</a></li>
              <li><a href="#catalog">Fresh Apple Scalp Tonic</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Botanical Actives</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#ingredients">Pyrus Malus (Green Apple)</a></li>
              <li><a href="#ingredients">Organic Amla (Vitamin C)</a></li>
              <li><a href="#ingredients">Reetha Saponins</a></li>
              <li><a href="#ingredients">Shikakai Conditioner</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '700', marginBottom: '16px' }}>Customer Care</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '10px', fontSize: '0.88rem' }}>
              <li>Dermatologist Hotline</li>
              <li>Shipping & Return Policy</li>
              <li>Track Your Package</li>
              <li>FAQ & Help Center</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontSize: '0.82rem' }}>
          <div>
            © {new Date().getFullYear()} Stylone Cosmocceuticals Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#86efac' }}>
              <Camera size={16} /> @StyloneCosmocceuticals
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
