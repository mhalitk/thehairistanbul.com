import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/content/blog/en';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug) || null;

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