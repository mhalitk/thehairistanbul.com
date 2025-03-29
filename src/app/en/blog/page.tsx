import BlogPage from '@/components/blog/BlogPage';
import { blogPosts } from '@/content/blog/en';

export default function Blog() {
  return (
    <BlogPage
      posts={blogPosts}
      title="Blog"
      description="Read our latest articles about hair transplants, techniques, and patient experiences."
      locale="en"
    />
  );
} 