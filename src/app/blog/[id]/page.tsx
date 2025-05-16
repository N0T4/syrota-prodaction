import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/types/blog'

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Back to Blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-theme-text/80 hover:text-theme-primary transition-colors mb-8 font-body"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-display text-theme-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-theme-text/60 font-body">
            <span>{post.date}</span>
            
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-12 overflow-hidden rounded-lg shadow-md">
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-display text-theme-secondary mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            if (paragraph.startsWith('-')) {
              return (
                <ul key={index} className="list-disc list-inside text-theme-text/80 font-body">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={index} className="text-theme-text/80 mb-6 font-body">
                {paragraph}
              </p>
            )
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-theme-primary/10">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-1 bg-theme-primary/10 text-theme-primary rounded-full text-sm font-body"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
} 