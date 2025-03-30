import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from '@/types/blog';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/blog/posts');

export function getAllBlogPosts(locale: string): BlogPost[] {
  const postsDirectory = path.join(POSTS_DIRECTORY, locale);
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content,
      date: data.date,
      category: data.category,
      imageUrl: data.imageUrl,
      tags: data.tags,
    };
  });

  // Sort posts by date in descending order
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogPostBySlug(slug: string, locale: string): BlogPost | null {
  try {
    const fullPath = path.join(POSTS_DIRECTORY, locale, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content,
      date: data.date,
      category: data.category,
      imageUrl: data.imageUrl,
      tags: data.tags,
    };
  } catch (error) {
    return null;
  }
} 