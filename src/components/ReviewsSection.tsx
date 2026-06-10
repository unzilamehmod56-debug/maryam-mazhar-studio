import React, { useState, useEffect } from 'react';
import { INITIAL_REVIEWS } from '../data';
import { Review } from '../types';
import { Star, CheckCircle, Quote, PlusCircle } from 'lucide-react';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Load reviews from localStorage + initial
  useEffect(() => {
    try {
      const saved = localStorage.getItem('maryam_reviews');
      if (saved) {
        setReviews(JSON.parse(saved));
      } else {
        setReviews(INITIAL_REVIEWS);
        localStorage.setItem('maryam_reviews', JSON.stringify(INITIAL_REVIEWS));
      }
    } catch(e) {
      setReviews(INITIAL_REVIEWS);
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim()) return alert('Please input your name');
    if (!text.trim()) return alert('Please input your review comments');

    const newReview: Review = {
      id: 'rev_' + Date.now(),
      author: author.toUpperCase().trim(),
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      isVerified: true
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('maryam_reviews', JSON.stringify(updated));
    } catch(e) {
      console.error(e);
    }

    setAuthor('');
    setRating(5);
    setText('');
    setShowForm(false);
    setFeedbackMsg('Thank you so much! Your verified review has been published on the luxury board.');
    setTimeout(() => {
      setFeedbackMsg('');
    }, 5000);
  };

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-16 h-16 text-primary/10" />
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-semibold block z-10 relative">GUESTS ATTEST</span>
          <h2 className="font-display text-4xl font-semibold text-on-surface uppercase relative z-10 tracking-tight mt-2">
            Client Experiences
          </h2>
          <div className="w-20 h-[1.5px] bg-primary mx-auto mt-4"></div>
        </div>

        {feedbackMsg && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-primary/10 border border-primary/20 text-on-primary-container text-xs font-sans text-center rounded-sm">
            {feedbackMsg}
          </div>
        )}

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.slice(0, 6).map((review) => (
            <div 
              key={review.id} 
              className="bg-surface p-10 luxury-shadow space-y-6 flex flex-col justify-between border border-outline-variant/10 rounded-sm hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="space-y-4">
                {/* Stars container */}
                <div className="flex text-primary-container">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'fill-primary-container text-primary-container' : 'text-outline-variant/40'}`} 
                    />
                  ))}
                </div>
                
                {/* Commentary */}
                <p className="font-sans italic text-xs text-on-surface-variant leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Attribution */}
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                <span className="font-sans text-[11px] font-bold tracking-widest text-primary">
                  — {review.author}
                </span>
                
                {review.isVerified && (
                  <span className="flex items-center space-x-1 text-[9px] font-sans font-bold text-primary/80 uppercase">
                    <CheckCircle className="w-3 h-3 text-primary-container fill-current text-white" />
                    <span>VERIFIED GUEST</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA to leave review */}
        <div className="text-center mt-12">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-on-primary font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm inline-flex items-center space-x-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>LEAVE YOUR VERIFIED EXPERIENCE</span>
            </button>
          ) : (
            <form onSubmit={handleSubmitReview} className="max-w-xl mx-auto p-8 bg-surface border border-outline-variant/40 space-y-4 text-left luxury-shadow rounded-sm mt-6">
              <h3 className="font-display text-lg font-bold text-on-surface uppercase tracking-wider text-center">Share Your Experience</h3>
              
              <div className="space-y-1">
                <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Your Full Name</label>
                <input 
                  type="text" 
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g., Ayesha Malik"
                  className="w-full border-0 border-b border-outline-variant bg-transparent py-2.5 focus:ring-0 focus:border-primary transition-colors text-xs text-on-surface"
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Your Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setRating(num)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star className={`w-6 h-6 ${num <= rating ? 'fill-primary-container text-primary-container' : 'text-outline-variant'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-sans text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block font-semibold">Your Review Commentary</label>
                <textarea 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tell our luxury community and future brides about your specific treatment results..."
                  rows={3}
                  className="w-full border-0 border-b border-outline-variant bg-transparent py-2.5 focus:ring-0 focus:border-primary transition-colors text-xs text-on-surface placeholder:text-outline-variant/60 resize-none"
                />
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="submit"
                  className="flex-grow bg-on-surface text-surface py-3 font-sans text-[10px] font-bold tracking-widest hover:bg-primary transition-colors uppercase"
                >
                  PUBLISH REVIEW
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 border border-outline-variant text-on-surface-variant py-3 font-sans text-[10px] font-bold tracking-widest hover:bg-surface-container-low transition-colors uppercase"
                >
                  CANCEL
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
