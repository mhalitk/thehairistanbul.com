import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/content/blog/en';
import type { BlogPost as BlogPostType } from '@/types/blog';
import { Metadata } from 'next';

type BlogPostPageProps = Promise<{
    slug: string;
}>;

// Generate dynamic metadata based on the blog post
export async function generateMetadata({ params }: { params: BlogPostPageProps }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((post: BlogPostType) => post.slug === slug) || null;

  if (!post) {
    return {
      title: 'Post Not Found | The Hair Istanbul',
      description: 'The blog post you\'re looking for doesn\'t exist or has been moved.',
    };
  }

  return {
    title: `${post.title} | The Hair Istanbul Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

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