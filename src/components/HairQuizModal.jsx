import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, RotateCcw, Copy, Check } from 'lucide-react';
import { products } from '../data/products';

export default function HairQuizModal({ isOpen, onClose, onAddToCart }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    scalpType: '',
    hairConcern: '',
    washFrequency: ''
  });
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // Result step
    }
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ scalpType: '', hairConcern: '', washFrequency: '' });
  };

  const copyCoupon = () => {
    navigator.clipboard.writeText('QUIZ15');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const recommendedProduct = products[0]; // Stylone Strong Apple Shampoo

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '560px',
          padding: '32px',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          animation: 'slideUp 0.3s ease-out'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} color="#64748b" />
        </button>

        {step <= 3 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Sparkles size={16} color="#15803d" />
              <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Stylone Hair Diagnostic Quiz • Step {step} of 3
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', marginBottom: '24px', overflow: 'hidden' }}>
              <div style={{ width: `${(step / 3) * 100}%`, height: '100%', background: '#15803d', transition: 'width 0.3s ease' }} />
            </div>
          </div>
        )}

        {/* Step 1: Scalp Type */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
              What best describes your scalp type?
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '20px' }}>
              This helps us formulate the right saponin & moisture balance for your scalp.
            </p>

            <div style={{ display: 'grid', gap: '10px', marginBottom: '24px' }}>
              {[
                { id: 'Oily', label: 'Oily / Gets greasy within 24 hours' },
                { id: 'Dry', label: 'Dry & Flaky / Feels tight after washing' },
                { id: 'Normal', label: 'Normal / Balanced moisture levels' },
                { id: 'Sensitive', label: 'Sensitive / Easily irritated or itchy' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption('scalpType', opt.id)}
                  style={{
                    background: answers.scalpType === opt.id ? '#f0fdf4' : '#ffffff',
                    border: answers.scalpType === opt.id ? '2px solid #15803d' : '1px solid #cbd5e1',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '0.92rem',
                    color: answers.scalpType === opt.id ? '#15803d' : '#334155',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {opt.label}
                  {answers.scalpType === opt.id && <CheckCircle2 size={18} color="#15803d" />}
                </button>
              ))}
            </div>

            <button
              className="btn-primary"
              disabled={!answers.scalpType}
              onClick={handleNext}
              style={{ width: '100%', justifyContent: 'center', opacity: answers.scalpType ? 1 : 0.5 }}
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Step 2: Hair Concern */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
              What is your primary hair concern?
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '20px' }}>
              Select the main issue you want Stylone to target.
            </p>

            <div style={{ display: 'grid', gap: '10px', marginBottom: '24px' }}>
              {[
                { id: 'HairFall', label: 'Heavy Hair Shedding & Thinning' },
                { id: 'WeakRoots', label: 'Weak Roots & Slow Hair Growth' },
                { id: 'Dandruff', label: 'Dandruff & Scalp Itchiness' },
                { id: 'Frizz', label: 'Dryness, Frizz & Split Ends' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption('hairConcern', opt.id)}
                  style={{
                    background: answers.hairConcern === opt.id ? '#f0fdf4' : '#ffffff',
                    border: answers.hairConcern === opt.id ? '2px solid #15803d' : '1px solid #cbd5e1',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '0.92rem',
                    color: answers.hairConcern === opt.id ? '#15803d' : '#334155',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {opt.label}
                  {answers.hairConcern === opt.id && <CheckCircle2 size={18} color="#15803d" />}
                </button>
              ))}
            </div>

            <button
              className="btn-primary"
              disabled={!answers.hairConcern}
              onClick={handleNext}
              style={{ width: '100%', justifyContent: 'center', opacity: answers.hairConcern ? 1 : 0.5 }}
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Step 3: Wash Frequency */}
        {step === 3 && (
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
              How frequently do you wash your hair?
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '20px' }}>
              Helps estimate bottle dosage & routine schedule.
            </p>

            <div style={{ display: 'grid', gap: '10px', marginBottom: '24px' }}>
              {[
                { id: 'Daily', label: 'Everyday / Daily' },
                { id: 'Alternate', label: '2 - 3 times a week' },
                { id: 'Weekly', label: 'Once a week' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption('washFrequency', opt.id)}
                  style={{
                    background: answers.washFrequency === opt.id ? '#f0fdf4' : '#ffffff',
                    border: answers.washFrequency === opt.id ? '2px solid #15803d' : '1px solid #cbd5e1',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '0.92rem',
                    color: answers.washFrequency === opt.id ? '#15803d' : '#334155',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {opt.label}
                  {answers.washFrequency === opt.id && <CheckCircle2 size={18} color="#15803d" />}
                </button>
              ))}
            </div>

            <button
              className="btn-primary"
              disabled={!answers.washFrequency}
              onClick={handleNext}
              style={{ width: '100%', justifyContent: 'center', opacity: answers.washFrequency ? 1 : 0.5 }}
            >
              Get My Diagnosis Result ✨
            </button>
          </div>
        )}

        {/* Step 4: Diagnostic Result & Custom Regimen */}
        {step === 4 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#dcfce7',
                color: '#15803d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <Sparkles size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a' }}>
                Your Hair Diagnostic Result
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', marginTop: '4px' }}>
                Based on your profile ({answers.scalpType} Scalp, {answers.hairConcern} concern)
              </p>
            </div>

            {/* Recommended Product Box */}
            <div style={{
              background: '#f8faf7',
              border: '1.5px solid #bbf7d0',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <img
                src={recommendedProduct.image}
                alt={recommendedProduct.name}
                style={{ width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover' }}
              />
              <div style={{ flex: 1 }}>
                <span className="badge-tag badge-green" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                  100% Match
                </span>
                <div style={{ fontSize: '0.96rem', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>
                  Stylone 'Strong Apple' Anti-Hair Fall Shampoo (200ml)
                </div>
                <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '2px' }}>
                  Enriched with Amla, Reetha, Shikakai & Green Apple.
                </div>
              </div>
            </div>

            {/* Quiz Discount Box */}
            <div style={{
              background: 'linear-gradient(135deg, #14532d, #15803d)',
              color: '#ffffff',
              borderRadius: '16px',
              padding: '16px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', opacity: 0.9 }}>
                Your Personal Diagnostic Offer
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: '800', marginTop: '2px' }}>
                Get Extra 15% OFF Coupon
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.2)',
                padding: '6px 14px',
                borderRadius: '20px',
                marginTop: '10px',
                fontWeight: '800',
                fontSize: '1rem',
                cursor: 'pointer'
              }} onClick={copyCoupon}>
                <span>QUIZ15</span>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className="btn-secondary"
                onClick={handleReset}
                style={{ padding: '12px' }}
                title="Retake Quiz"
              >
                <RotateCcw size={16} />
              </button>
              <button
                className="btn-primary"
                onClick={() => {
                  onAddToCart({ ...recommendedProduct, price: parseFloat((recommendedProduct.price * 0.85).toFixed(2)) });
                  onClose();
                }}
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Add Match To Cart (₹{(recommendedProduct.price * 0.85).toFixed(2)})
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
