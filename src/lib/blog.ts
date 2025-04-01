import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from '@/types/blog';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/blog/posts');
const POSTS_PER_PAGE = 9;

export interface BlogPostsResponse {
  posts: BlogPost[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
}

export function getAllBlogPosts(
  locale: string,
  page: number = 1,
  searchQuery: string = ''
): BlogPostsResponse {
  const postsDirectory = path.join(POSTS_DIRECTORY, locale);
  const fileNames = fs.readdirSync(postsDirectory);

  let posts = fileNames.map((fileName) => {
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
  posts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  // Apply search filter if query exists
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag: string) => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query)
    );
  }

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages);

  // Apply pagination
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return {
    posts: paginatedPosts,
    totalPosts,
    totalPages,
    currentPage,
  };
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