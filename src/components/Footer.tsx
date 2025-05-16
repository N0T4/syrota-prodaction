import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display text-theme-primary mb-4">Contact</h3>
            <Link href="/contact" className="text-theme-text hover:text-theme-primary transition-colors">
              <p>Get in touch for collaborations</p>
            </Link>
            <Link href="/contact">
              <button className="mt-4 px-6 py-2 bg-theme-primary text-white font-body hover:bg-theme-secondary transition-colors rounded-md">
                Contact Me
              </button>
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-display text-theme-primary mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/valeri_syrota/" target="_blank" rel="noopener noreferrer" className="text-theme-text hover:text-theme-primary transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/valeriia-syrota-8b5a212b8/" target="_blank" rel="noopener noreferrer" className="text-theme-text hover:text-theme-primary transition-colors">LinkedIn</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display text-theme-primary mb-4">Newsletter</h3>
            <p className="text-theme-text mb-4">Stay updated with my latest projects</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-theme-accent/5 border border-theme-primary/20 rounded-md focus:outline-none focus:border-theme-primary"
              />
              <button className="px-6 py-2 bg-theme-primary text-white font-body hover:bg-theme-secondary transition-colors rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-theme-text/60 mt-12">
          © 2024 Syrota.Production. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 