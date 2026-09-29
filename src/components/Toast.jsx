import React from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 2000,
      background: '#0f172a',
      color: '#ffffff',
      padding: '12px 20px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      animation: 'slideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }}>
      <CheckCircle2 size={20} color="#22c55e" />
      <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{toast.message}</span>
    </div>
  );
}
