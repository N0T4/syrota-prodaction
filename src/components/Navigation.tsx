'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { MenuButton } from './MenuButton'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/img/logo.png"
              alt="Syrota Production Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-display text-theme-primary hover:text-theme-secondary transition-colors">
              Syrota<span className="text-theme-tertiary">.Production</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8">
            <Link href="/about" className="font-body text-theme-text hover:text-theme-primary transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="font-body text-theme-text hover:text-theme-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="font-body text-theme-text hover:text-theme-primary transition-colors">
              Blog
            </Link>
            <Link href="/experience" className="font-body text-theme-text hover:text-theme-primary transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="font-body text-theme-text hover:text-theme-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/about" 
                className="font-body text-theme-text hover:text-theme-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/portfolio" 
                className="font-body text-theme-text hover:text-theme-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/blog" 
                className="font-body text-theme-text hover:text-theme-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/experience" 
                className="font-body text-theme-text hover:text-theme-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                href="/contact" 
                className="font-body text-theme-text hover:text-theme-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 