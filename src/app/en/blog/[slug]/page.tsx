import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/content/blog/en';
import type { BlogPost as BlogPostType } from '@/types/blog';

type BlogPostPageProps = Promise<{
    slug: string;
}>;

export default async function BlogPostPage({ params }: { params: BlogPostPageProps }) {
  const { slug } = await params;
  const post = blogPosts.find((post: BlogPostType) => post.slug === slug) || null;

  return (
    <BlogPost
      post={post}
      locale="en"
      backToBlogText="Back to Blog"
      notFoundTitle="Post Not Found"
      notFoundDescription="The blog post you're looking for doesn't exist or has been moved."
    />
  );
} 