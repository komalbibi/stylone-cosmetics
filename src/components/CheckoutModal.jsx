import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, DollarSign, Smartphone, PackageCheck } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, cartItems, grandTotal, onOrderSuccess }) {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 234-5678',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    postalCode: '97477',
    cardNumber: '4532 •••• •••• 8921',
    expDate: '11/28',
    cvv: '882'
  });
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const generatedId = 'STYLONE-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderCompleted(true);
    onOrderSuccess();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '620px',
          padding: '32px',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer' }}
        >
          <X size={18} color="#64748b" />
        </button>

        {!orderCompleted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <ShieldCheck size={20} color="#15803d" />
              <span style={{ fontSize: '0.84rem', fontWeight: '700', color: '#15803d', textTransform: 'uppercase' }}>
                Secure SSL Encrypted Checkout
              </span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>
              Complete Your Stylone Order
            </h3>

            {/* Order Items Preview Bar */}
            <div style={{
              background: '#f8faf7',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '14px 18px',
              marginBottom: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0f172a' }}>
                  Total Payable: <span style={{ color: '#15803d' }}>₹{grandTotal.toFixed(2)}</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  {cartItems.length} Product(s) in order
                </div>
              </div>
              <span className="badge-tag badge-green">Free Express Delivery</span>
            </div>

            <form onSubmit={handleSubmitOrder} style={{ display: 'grid', gap: '16px' }}>
              {/* Shipping Address */}
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>
                  1. Shipping Information
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#475569' }}>Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#475569' }}>Phone Number</label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '10px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#475569' }}>Delivery Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '10px' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#475569' }}>City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#475569' }}>Postal / Zip Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div style={{ marginTop: '10px' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>
                  2. Select Payment Option
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '14px' }}>
                  {[
                    { id: 'card', label: 'Credit/Debit', icon: CreditCard },
                    { id: 'upi', label: 'UPI / Wallet', icon: Smartphone },
                    { id: 'cod', label: 'Pay on Delivery', icon: DollarSign }
                  ].map(m => {
                    const Icon = m.icon;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id)}
                        style={{
                          background: paymentMethod === m.id ? '#f0fdf4' : '#ffffff',
                          border: paymentMethod === m.id ? '2px solid #15803d' : '1px solid #cbd5e1',
                          color: paymentMethod === m.id ? '#15803d' : '#334155',
                          borderRadius: '12px',
                          padding: '12px 8px',
                          fontWeight: '700',
                          fontSize: '0.82rem',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Icon size={20} />
                        {m.label}
                      </button>
                    );
                  })}
                </div>

                {paymentMethod === 'card' && (
                  <div style={{ background: '#f8faf7', border: '1px solid #e2e8f0', padding: '14px', borderRadius: '12px', display: 'grid', gap: '10px' }}>
                    <div>
                      <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#475569' }}>Card Number</label>
                      <input type="text" value={formData.cardNumber} readOnly style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', marginTop: '2px' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#475569' }}>Expiry Date</label>
                        <input type="text" value={formData.expDate} readOnly style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', marginTop: '2px' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#475569' }}>CVV Code</label>
                        <input type="text" value={formData.cvv} readOnly style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', marginTop: '2px' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                className="btn-primary"
                type="submit"
                style={{ width: '100%', padding: '14px', fontSize: '1.05rem', justifyContent: 'center', marginTop: '10px' }}
              >
                Place Order (₹{grandTotal.toFixed(2)})
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt View */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#15803d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <PackageCheck size={40} />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a' }}>
              Order Confirmed!
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.96rem', marginTop: '6px' }}>
              Thank you for purchasing <strong>Stylone Cosmocceuticals</strong>.
            </p>

            <div style={{
              background: '#f8faf7',
              border: '1px solid #bbf7d0',
              borderRadius: '16px',
              padding: '20px',
              margin: '24px 0',
              textAlign: 'left',
              display: 'grid',
              gap: '10px',
              fontSize: '0.88rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Order Number:</span>
                <strong style={{ color: '#15803d' }}>{orderId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Customer Name:</span>
                <strong>{formData.fullName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Shipping Address:</span>
                <span>{formData.address}, {formData.city}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Estimated Arrival:</span>
                <strong style={{ color: '#15803d' }}>Within 2 - 3 Business Days</strong>
              </div>
            </div>

            <button className="btn-primary" onClick={onClose} style={{ width: '100%', justifyContent: 'center' }}>
              Back to Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
