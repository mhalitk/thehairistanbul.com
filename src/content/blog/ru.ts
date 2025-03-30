import { getAllBlogPosts } from '@/lib/blog';
import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = getAllBlogPosts('ru'); 