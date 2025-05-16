import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '../types/blog'

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-accent/5">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-theme-primary/10"></div>
        <div className="absolute inset-0">
        <Image
            src="/img/photo_2025-05-16_01-39-47.jpg"
            alt="Hero background"
            fill
            className="object-cover blur-[2px]"
          priority
        />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6 text-white">
            CINEMATIC VISIONS
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-body">
            Crafting compelling narratives through the lens
          </p>
          <Link href="/portfolio">
            <button className="theme-button">Explore Portfolio</button>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-display mb-12 text-theme-primary text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="theme-card group h-[800px] flex flex-col">
            <div className="relative h-[450px] mb-4 overflow-hidden rounded flex justify-center items-center bg-gray-50">
              <Image
                src="/img/12345.JPG"
                alt="Left Unsaid Project"
                width={767}
                height={767}
                className="group-hover:scale-110 transition-transform duration-500 object-contain w-auto h-auto"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-display text-theme-primary mb-2">Left Unsaid</h3>
              <p className="text-theme-text/80 mb-4 flex-grow">On the night of her farewell party, Mabel prepares to leave town, while her friend Eugene struggled with unspoken feelings. Left Unsaid captures a night of impulsive choices and emotional tension, where love, friendship, and future paths collide.</p>
              <Link href="/portfolio/left-unsaid">
                <button className="theme-button">View Project</button>
              </Link>
            </div>
          </div>
          <div className="theme-card group h-[800px] flex flex-col">
            <div className="relative h-[450px] mb-4 overflow-hidden rounded flex justify-center items-center bg-gray-50">
              <Image
                src="/img/all of me head.JPG"
                alt="All of Me Project"
                width={767}
                height={767}
                className="group-hover:scale-110 transition-transform duration-500 object-contain w-auto h-auto"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-display text-theme-primary mb-2">All of Me</h3>
              <p className="text-theme-text/80 mb-4 flex-grow">A former Google software developer abandons her successful tech career to reinvent herself as a DJ, navigating the vibrant world of electronic music and personal reinvention.</p>
              <Link href="/portfolio/all-of-me">
                <button className="theme-button">View Project</button>
              </Link>
            </div>
          </div>
          <div className="theme-card group h-[800px] flex flex-col">
            <div className="relative h-[450px] mb-4 overflow-hidden rounded flex justify-center items-center bg-gray-50">
            <Image
                src="/img/IMG_1843.PNG"
                alt="The Last Wish Project"
                width={767}
                height={767}
                className="group-hover:scale-110 transition-transform duration-500 object-contain w-auto h-auto"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-display text-theme-primary mb-2">The Last Wish</h3>
              <p className="text-theme-text/80 mb-4 flex-grow">An emotional journey through the final moments of a life well-lived.</p>
              <Link href="/portfolio/the-last-wish">
                <button className="theme-button">View Project</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-theme-accent/5 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display mb-12 text-theme-primary text-center">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Direction', 'Cinematography', 'Post-Production'].map((service) => (
              <div key={service} className="theme-card text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-theme-primary/10 flex items-center justify-center">
                  <span className="text-theme-primary text-2xl">•</span>
                </div>
                <h3 className="text-xl font-display text-theme-primary mb-4">{service}</h3>
                <p className="text-theme-text/80">
                  Professional {service.toLowerCase()} services for your next big project.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-display mb-12 text-theme-primary text-center">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.id} className="theme-card">
              <div className="relative aspect-video mb-4 overflow-hidden rounded">
          <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-display text-theme-primary mb-2">{post.title}</h3>
              <p className="text-theme-text/80 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-theme-text/60">{post.date}</span>
                <Link href={`/blog/${post.id}`}>
                  <button className="theme-button">Read More</button>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="theme-button">View All Posts</button>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-theme-primary/10"></div>
        <div className="absolute inset-0">
          <Image
            src="/img/IMG_1142.JPG"
            alt="CTA background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-white">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate and create something extraordinary together.
          </p>
          <Link href="/contact">
            <button className="theme-button">Get in Touch</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
