import postsData from '@/content/posts.json'
import type { Post } from '@/lib/types'

export function getAllPosts(): Post[] {
  return (postsData as Post[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): Post | undefined {
  return (postsData as Post[]).find((p) => p.slug === slug)
}

export function getAllPostSlugs(): string[] {
  return (postsData as Post[]).map((p) => p.slug)
}

export function getPostsByTag(tag: string): Post[] {
  return (postsData as Post[]).filter((p) => p.tags.includes(tag))
}
