import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/content/blog/ru';
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
      title: 'Запись не найдена | The Hair Istanbul',
      description: 'Запрашиваемая запись блога не существует или была перемещена.',
    };
  }

  return {
    title: `${post.title} | The Hair Istanbul Блог`,
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
      locale="ru"
      backToBlogText="Вернуться к блогу"
      notFoundTitle="Запись не найдена"
      notFoundDescription="Запрашиваемая запись блога не существует или была перемещена."
    />
  );
} 