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
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20">
        <Link 
          href="/" 
          className="inline-block px-6 py-2 mb-8 text-theme-primary border border-theme-primary/20 rounded hover:bg-theme-primary/5 transition-colors font-body"
        >
          ← Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-8 font-display text-theme-primary text-center">
            Get in Touch
          </h1>
          
          <p className="text-xl mb-12 text-theme-text/80 text-center">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-display mb-4 text-theme-primary">Contact Information</h2>
              <div className="space-y-4 text-theme-text/80">
                <p>
                  <span className="font-semibold">Email:</span>
                  <br />
                  <a href="mailto:valerisyrota@gmail.com" className="hover:text-theme-primary transition-colors">
                    valerisyrota@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Location:</span>
                  <br />
                  Dublin, Ireland
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display mb-4 text-theme-primary">Connect</h2>
              <div className="space-y-2 text-theme-text/80">
                <p>
                  <a href="https://www.linkedin.com/in/valeriia-syrota-8b5a212b8/" target="_blank" rel="noopener noreferrer" className="hover:text-theme-primary transition-colors">
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/valeri_syrota/" target="_blank" rel="noopener noreferrer" className="hover:text-theme-primary transition-colors">
                    Instagram
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-theme-text/80 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-theme-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-primary/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-theme-text/80 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-theme-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-primary/20"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-theme-text/80 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-theme-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-primary/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-theme-text/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-theme-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-primary/20"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 text-white bg-theme-primary rounded-md transition-colors
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-theme-primary/90'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
} 