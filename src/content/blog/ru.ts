import { getAllBlogPosts } from '@/lib/blog';
import type { BlogPost } from '@/types/blog';

// This is now just a placeholder since we're using getAllBlogPosts directly in the page component
export const blogPosts: BlogPost[] = getAllBlogPosts('ru').posts; 