import React from 'react';
import { Award, ShieldCheck, Activity, Users, CheckCircle, Zap } from 'lucide-react';

export default function ClinicalStats() {
  const stats = [
    { number: "94%", label: "Reduction in Hair Shedding", desc: "Tested in 21-day independent dermatological panel of 150 participants." },
    { number: "98%", label: "Scalp Pore Cleansing Efficacy", desc: "Dissolves excess sebum & pollution buildup using natural Reetha saponins." },
    { number: "10k+", label: "Verified Satisfied Customers", desc: "Trusted by top trichologists & natural hair care enthusiasts across the globe." },
    { number: "100%", label: "Cruelty-Free & Plant Active", desc: "No harsh sulfates, parabens, synthetic dyes, or silicone residue." }
  ];

  return (
    <section id="clinical" style={{
      padding: '72px 0',
      background: 'linear-gradient(135deg, #14532d 0%, #15803d 100%)',
      color: '#ffffff'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <span style={{
            background: 'rgba(255,255,255,0.15)',
            color: '#86efac',
            fontSize: '0.8rem',
            fontWeight: '700',
            padding: '4px 14px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Clinical Performance Data
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', marginTop: '12px', color: '#ffffff' }}>
            Proven Science Behind Stylone Cosmocceuticals
          </h2>
          <p style={{ color: '#bbf7d0', fontSize: '1rem', marginTop: '8px' }}>
            Rigorous dermatological testing ensures every bottle delivers visible root strengthening and scalp revival.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '20px',
                padding: '28px 24px',
                textAlign: 'center'
              }}
            >
              <div style={{
                fontSize: '2.8rem',
                fontWeight: '800',
                color: '#86efac',
                fontFamily: "'Outfit', sans-serif",
                lineHeight: 1
              }}>
                {item.number}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '10px', color: '#ffffff' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '0.84rem', color: '#dcfce7', marginTop: '8px', lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Certification Logos Bar */}
        <div style={{
          marginTop: '48px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '32px',
          fontSize: '0.9rem',
          color: '#dcfce7',
          fontWeight: '600'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldCheck size={20} color="#86efac" /> GMP Certified Lab</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={20} color="#86efac" /> ISO 22716 Standard</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Activity size={20} color="#86efac" /> Dermatologically Tested</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={20} color="#86efac" /> Trichologist Endorsed</span>
        </div>
      </div>
    </section>
  );
}
