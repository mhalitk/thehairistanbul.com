import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/content/blog/ru';

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
      locale="ru"
      backToBlogText="Вернуться к блогу"
      notFoundTitle="Запись не найдена"
      notFoundDescription="Запрашиваемая запись блога не существует или была перемещена."
    />
  );
} 