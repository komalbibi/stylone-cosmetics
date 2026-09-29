import React, { useState } from 'react';
import { reviewsData } from '../data/reviews';
import { Star, CheckCircle, ThumbsUp, MessageSquare, Plus, X } from 'lucide-react';

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState(reviewsData);
  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    title: '',
    rating: 5,
    content: '',
    hairType: 'Straight Hair'
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.author || !newReview.content) return;

    const created = {
      id: Date.now(),
      author: newReview.author,
      title: newReview.title || 'Great product!',
      rating: Number(newReview.rating),
      verified: true,
      badge: 'Verified Buyer',
      date: 'Just now',
      content: newReview.content,
      hairType: newReview.hairType,
      recommended: true
    };

    setReviewsList([created, ...reviewsList]);
    setModalOpen(false);
    setNewReview({ author: '', title: '', rating: 5, content: '', hairType: 'Straight Hair' });
  };

  return (
    <section id="reviews" style={{ padding: '72px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '40px',
          gap: '20px'
        }}>
          <div>
            <span className="badge-tag badge-green" style={{ marginBottom: '8px' }}>
              Real Results
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' }}>
              What Our Customers Are Saying
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', marginTop: '4px' }}>
              Over 1,420+ verified reviews for Stylone Strong Apple Anti Hair Fall Shampoo.
            </p>
          </div>

          <button
            className="btn-primary"
            onClick={() => setModalOpen(true)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Plus size={18} /> Write a Review
          </button>
        </div>

        {/* Rating Breakdown Header */}
        <div style={{
          background: '#f8faf7',
          border: '1px solid #e2e8f0',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '32px'
        }}>
          <div style={{ textAlign: 'center', minWidth: '140px' }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#15803d', lineHeight: 1 }}>4.9</div>
            <div style={{ display: 'flex', justifyContent: 'center', color: '#f59e0b', margin: '4px 0' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>Out of 5 Stars</div>
          </div>

          <div style={{ flex: 1, minWidth: '240px', display: 'grid', gap: '6px' }}>
            {[
              { stars: 5, pct: '92%' },
              { stars: 4, pct: '6%' },
              { stars: 3, pct: '1.5%' },
              { stars: 2, pct: '0.5%' },
              { stars: 1, pct: '0%' }
            ].map(row => (
              <div key={row.stars} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem' }}>
                <span style={{ width: '40px', fontWeight: '600', color: '#334155' }}>{row.stars} ★</span>
                <div style={{ flex: 1, height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: row.pct, height: '100%', background: '#15803d' }} />
                </div>
                <span style={{ width: '36px', color: '#64748b', textAlign: 'right' }}>{row.pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Cards List */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{ display: 'flex', color: '#f59e0b', marginBottom: '4px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: '700', color: '#0f172a' }}>{rev.title}</h4>
                </div>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{rev.date}</span>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, marginBottom: '16px', flex: 1 }}>
                "{rev.content}"
              </p>

              <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {rev.author}
                    {rev.verified && <CheckCircle size={14} color="#15803d" />}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                    {rev.hairType}
                  </div>
                </div>

                <div style={{ fontSize: '0.75rem', background: '#f0fdf4', color: '#15803d', fontWeight: '700', padding: '4px 10px', borderRadius: '12px' }}>
                  {rev.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '500px',
              padding: '32px',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>
              Write a Review
            </h3>

            <form onSubmit={handleAddReview} style={{ display: 'grid', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.84rem', fontWeight: '600', color: '#334155' }}>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Priya Rao"
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.84rem', fontWeight: '600', color: '#334155' }}>Rating</label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                >
                  <option value={5}>5 Stars — Excellent</option>
                  <option value={4}>4 Stars — Very Good</option>
                  <option value={3}>3 Stars — Average</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.84rem', fontWeight: '600', color: '#334155' }}>Review Headline</label>
                <input
                  type="text"
                  placeholder="e.g. Scalp feels so fresh and zero shedding!"
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.84rem', fontWeight: '600', color: '#334155' }}>Your Hair Type</label>
                <input
                  type="text"
                  placeholder="e.g. Wavy / Fine hair"
                  value={newReview.hairType}
                  onChange={(e) => setNewReview({ ...newReview, hairType: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.84rem', fontWeight: '600', color: '#334155' }}>Detailed Review</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share your experience with Stylone Strong Apple Shampoo..."
                  value={newReview.content}
                  onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', marginTop: '4px', outline: 'none' }}
                />
              </div>

              <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
