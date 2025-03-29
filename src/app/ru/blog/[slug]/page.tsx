import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/content/blog/ru';
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
      locale="ru"
      backToBlogText="Вернуться к блогу"
      notFoundTitle="Запись не найдена"
      notFoundDescription="Запрашиваемая запись блога не существует или была перемещена."
    />
  );
} 