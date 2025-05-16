import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display text-theme-primary hover:text-theme-secondary transition-colors">
            Syrota<span className="text-theme-tertiary">.Production</span>
          </Link>
          <div className="flex gap-8">
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
        </div>
      </div>
    </nav>
  )
} 