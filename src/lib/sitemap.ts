import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const baseUrl = 'https://thehairistanbul.com'

// Function to get blog post slugs and dates from a directory
function getBlogPostSlugs(locale: string): { slug: string; date: string }[] {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog/posts', locale)
  const files = fs.readdirSync(postsDirectory)
  
  return files.map(file => {
    const filePath = path.join(postsDirectory, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    const slug = file.replace('.md', '')
    return {
      slug,
      date: data.date as string
    }
  })
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
  ]

  // Get blog post slugs and dates for both languages
  const enBlogPosts = getBlogPostSlugs('en')
  const ruBlogPosts = getBlogPostSlugs('ru')

  // Generate static routes
  const staticRoutes = routes.flatMap(route => [
    {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 0.9 : 0.7,
    },
    {
      url: `${baseUrl}/ru${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 0.9 : 0.7,
    },
  ])

  // Generate blog post routes
  const blogRoutes = [
    // English blog posts
    ...enBlogPosts.map(({ slug, date }) => ({
      url: `${baseUrl}/en/blog/${slug}`,
      lastModified: new Date(date).toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    // Russian blog posts
    ...ruBlogPosts.map(({ slug, date }) => ({
      url: `${baseUrl}/ru/blog/${slug}`,
      lastModified: new Date(date).toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ]

  return [...staticRoutes, ...blogRoutes]
} 