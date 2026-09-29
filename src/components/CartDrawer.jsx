import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, ShieldCheck, Truck, Check } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedCheckout }) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 1000.00;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === 'STYLONE20') {
      setDiscountPercent(20);
      setCouponApplied(true);
    } else if (code === 'QUIZ15') {
      setDiscountPercent(15);
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code. Try STYLONE20 or QUIZ15');
    }
  };

  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 150.00;
  const grandTotal = subtotal - discountAmount + shippingFee;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.25s ease-out'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
          animation: 'slideLeft 0.3s ease-out'
        }}
      >
        {/* Cart Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} color="#15803d" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>
              Your Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <X size={18} color="#64748b" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div style={{ background: '#f0fdf4', padding: '12px 24px', borderBottom: '1px solid #bbf7d0' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#15803d', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <Truck size={14} />
            {amountNeededForFreeShipping > 0
              ? `Add Rs. ${amountNeededForFreeShipping.toFixed(0)} more for FREE Express Shipping!`
              : "🎉 Congratulations! You unlocked FREE Express Shipping across Pakistan!"}
          </div>
          <div style={{ width: '100%', height: '6px', background: '#dcfce7', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${progressToFreeShipping}%`, height: '100%', background: '#22c55e', transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#f8faf7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <ShoppingBag size={32} color="#94a3b8" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b' }}>Your Cart is empty</h4>
              <p style={{ fontSize: '0.88rem', color: '#64748b', marginTop: '4px' }}>
                Add the Stylone Strong Apple Shampoo (200ml) to start your healthy hair journey!
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '16px' }}>
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '14px',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    background: '#ffffff'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '72px', height: '72px', borderRadius: '12px', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f172a', lineHeight: 1.3 }}>
                      {item.name}
                    </div>
                    {item.selectedSize && (
                      <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                        Option: {item.selectedSize}
                      </div>
                    )}
                    <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#15803d', marginTop: '4px' }}>
                      Rs. {item.price}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                      {/* Stepper */}
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          style={{ width: '28px', height: '28px', background: '#f8faf7', border: 'none', fontWeight: '700' }}
                        >
                          -
                        </button>
                        <span style={{ width: '32px', textAlign: 'center', fontSize: '0.84rem', fontWeight: '700' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          style={{ width: '28px', height: '28px', background: '#f8faf7', border: 'none', fontWeight: '700' }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(idx)}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout Button */}
        {cartItems.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid #e2e8f0', background: '#f8faf7' }}>
            {/* Promo Code Box */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '4px 10px' }}>
                <Tag size={16} color="#64748b" />
                <input
                  type="text"
                  placeholder="Promo Code (STYLONE20)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{ border: 'none', background: 'transparent', padding: '6px', fontSize: '0.84rem', width: '100%', outline: 'none' }}
                />
              </div>
              <button
                onClick={applyCoupon}
                style={{ background: '#15803d', color: '#ffffff', border: 'none', padding: '0 14px', borderRadius: '10px', fontSize: '0.84rem', fontWeight: '700' }}
              >
                Apply
              </button>
            </div>

            {couponApplied && (
              <div style={{ fontSize: '0.78rem', color: '#15803d', fontWeight: '700', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Check size={14} /> Coupon applied! {discountPercent}% discount active.
              </div>
            )}

            {/* Calculations */}
            <div style={{ display: 'grid', gap: '6px', fontSize: '0.88rem', color: '#475569', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span>
                <span>Rs. {subtotal.toFixed(0)}</span>
              </div>

              {discountPercent > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#15803d', fontWeight: '600' }}>
                  <span>Discount ({discountPercent}%)</span>
                  <span>-Rs. {discountAmount.toFixed(0)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Estimated Shipping</span>
                <span>{shippingFee === 0 ? <strong style={{ color: '#15803d' }}>FREE</strong> : `Rs. ${shippingFee}`}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', paddingTop: '8px', borderTop: '1px solid #cbd5e1' }}>
                <span>Total</span>
                <span>Rs. {grandTotal.toFixed(0)}</span>
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={() => {
                onClose();
                onProceedCheckout(grandTotal);
              }}
              style={{ width: '100%', padding: '14px', fontSize: '1rem', justifyContent: 'center' }}
            >
              Proceed to Checkout <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
