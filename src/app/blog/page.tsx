import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/types/blog'

export default function Blog() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Get featured post (newest)
  const featuredPost = sortedPosts[0]
  const otherPosts = sortedPosts.slice(1)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-display text-theme-primary mb-12 text-center">
        Blog & Commentary
      </h1>
      
      {/* Featured Post */}
      <div className="mb-16">
        <Link href={`/blog/${featuredPost.id}`} className="group">
          <div className="relative aspect-video mb-6 overflow-hidden rounded-lg shadow-md">
            <Image
              src={featuredPost.thumbnail}
              alt={featuredPost.title}
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-3xl font-display text-theme-primary mb-3 group-hover:text-theme-secondary transition-colors">
            {featuredPost.title}
          </h2>
          <p className="text-theme-text/80 mb-3 font-body">{featuredPost.excerpt}</p>
          <div className="flex items-center gap-4 text-theme-text/60 font-body">
            <span>{featuredPost.date}</span>
          </div>
        </Link>
      </div>

      {/* Other Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="group theme-card">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-display text-theme-primary mb-2 group-hover:text-theme-secondary transition-colors">
              {post.title}
            </h3>
            <p className="text-theme-text/80 text-sm mb-3 line-clamp-2 font-body">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-theme-text/60 font-body">
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 