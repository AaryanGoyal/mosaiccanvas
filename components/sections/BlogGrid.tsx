import BlogCard from '@/components/ui/BlogCard'
import type { Post } from '@/lib/types'

interface BlogGridProps {
  posts: Post[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
      }}
      className="blog-grid"
    >
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
      <style>{`
        @media (max-width: 900px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
