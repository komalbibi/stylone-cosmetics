import React, { useState } from 'react';
import { ingredientsData } from '../data/ingredients';
import { Sparkles, CheckCircle2, ShieldCheck, Leaf } from 'lucide-react';

export default function IngredientExplorer() {
  const [selectedIngredient, setSelectedIngredient] = useState(ingredientsData[0]);

  return (
    <section id="ingredients" style={{
      padding: '72px 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
          <span className="badge-tag badge-green" style={{ marginBottom: '12px' }}>
            <Leaf size={12} /> Science Meets Ayurveda
          </span>
          <h2 style={{ fontSize: '2.3rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px' }}>
            Powered by 4 Bio-Active Botanical Pillars
          </h2>
          <p style={{ color: '#475569', fontSize: '1.02rem', marginTop: '10px' }}>
            Stylone Strong Apple combines Pyrus Malus polyphenols with clinical Ayurvedic herbs to cleanse, nourish, and halt hair fall at the root.
          </p>
        </div>

        {/* Ingredient Navigation Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '16px',
          marginBottom: '36px'
        }}>
          {ingredientsData.map((ing) => {
            const isSelected = selectedIngredient.id === ing.id;
            return (
              <div
                key={ing.id}
                onClick={() => setSelectedIngredient(ing)}
                style={{
                  background: isSelected ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  border: isSelected ? `2px solid ${ing.color}` : '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 10px 25px rgba(21, 128, 61, 0.12)' : 'none',
                  transform: isSelected ? 'translateY(-4px)' : 'none'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: isSelected ? ing.color : '#f1f5f9',
                  color: isSelected ? '#ffffff' : '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                  fontWeight: '700'
                }}>
                  <Leaf size={20} />
                </div>

                <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
                  {ing.name.split(' (')[0]}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '500' }}>
                  {ing.role}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Ingredient Showcase Banner */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '36px',
          border: '1px solid #bbf7d0',
          boxShadow: '0 12px 32px rgba(21, 128, 61, 0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div>
            <span className="badge-tag badge-gold" style={{ marginBottom: '12px' }}>
              Key Active Component
            </span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
              {selectedIngredient.name}
            </h3>
            <div style={{ fontSize: '1rem', fontWeight: '700', color: selectedIngredient.color, marginBottom: '16px' }}>
              {selectedIngredient.role}
            </div>

            <p style={{ fontSize: '1.02rem', color: '#334155', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedIngredient.benefit}
            </p>

            <div style={{ display: 'grid', gap: '10px' }}>
              {selectedIngredient.highlights.map((h, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#22c55e" />
                  <span style={{ fontSize: '0.92rem', fontWeight: '600', color: '#1e293b' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
            borderRadius: '20px',
            padding: '32px',
            textAlign: 'center',
            border: '1px solid #bbf7d0'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
            }}>
              <Leaf size={40} color={selectedIngredient.color} />
            </div>

            <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#14532d', marginBottom: '8px' }}>
              100% Pure Cosmeceutical Grade
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#166534', lineHeight: 1.5 }}>
              Sourced responsibly from sustainable botanical orchards and processed with cold-extraction technology to preserve bio-active enzymes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
