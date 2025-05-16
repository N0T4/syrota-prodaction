'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to a third-party form service
      // like Formspree, Netlify Forms, or a similar static form service
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display text-theme-primary mb-8 text-center">
          Get in Touch
        </h1>
        <div className="max-w-2xl mx-auto">
          {submitStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h2 className="text-2xl font-display text-theme-primary mb-4">Thank You!</h2>
              <p className="text-theme-text/80 mb-6">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="theme-button"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-theme-text/80 mb-2 font-body">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-theme-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary/20 font-body"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-theme-text/80 mb-2 font-body">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-theme-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary/20 font-body"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-theme-text/80 mb-2 font-body">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-theme-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary/20 font-body"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-theme-text/80 mb-2 font-body">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-theme-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary/20 font-body"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`theme-button ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center font-body">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 