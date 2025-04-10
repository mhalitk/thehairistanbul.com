import BlogPage from '@/components/blog/BlogPage';
import { getAllBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';

type PageProps = Promise<{
  page?: string;
  search?: string;
}>;

export const metadata: Metadata = {
  title: 'Блог | The Hair Istanbul',
  description: 'Читайте наши последние статьи о пересадке волос, методах и опыте пациентов.',
  openGraph: {
    title: 'Блог | The Hair Istanbul',
    description: 'Читайте наши последние статьи о пересадке волос, методах и опыте пациентов.',
    images: ['/img/blog/blog-cover.png'],
  },
};

export default async function Blog({ searchParams }: { searchParams: PageProps }) {
  const { page, search } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;
  const searchQuery = search || '';

  const { posts, totalPosts, totalPages, currentPage } = getAllBlogPosts('ru', pageNumber, searchQuery);

  return (
    <BlogPage
      posts={posts}
      totalPosts={totalPosts}
      totalPages={totalPages}
      currentPage={currentPage}
      title="Блог"
      description="Читайте наши последние статьи о пересадке волос, методах и опыте пациентов."
      locale="ru"
      searchPlaceholder="Поиск статей..."
      noResultsText="Статьи по вашему запросу не найдены."
    />
  );
} 