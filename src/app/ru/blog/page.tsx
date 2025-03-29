import BlogPage from '@/components/blog/BlogPage';
import { blogPosts } from '@/content/blog/ru';

export default function Blog() {
  return (
    <BlogPage
      posts={blogPosts}
      title="Блог"
      description="Читайте наши последние статьи о пересадке волос, методах и опыте пациентов."
      locale="ru"
    />
  );
} 