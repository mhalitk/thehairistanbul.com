import BlogPage from '@/components/blog/BlogPage';
import { getAllBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';

type PageProps = Promise<{
    page?: string;
    search?: string;
}>;

export const metadata: Metadata = {
  title: 'Blog | The Hair Istanbul',
  description: 'Read our latest articles about hair transplants, techniques, and patient experiences.',
  openGraph: {
    title: 'Blog | The Hair Istanbul',
    description: 'Read our latest articles about hair transplants, techniques, and patient experiences.',
    images: ['/img/blog/blog-cover.png'],
  },
};

export default async function Blog({ searchParams }: { searchParams: PageProps }) {
  const { page, search } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;
  const searchQuery = search || '';

  const { posts, totalPosts, totalPages, currentPage } = getAllBlogPosts('en', pageNumber, searchQuery);

  return (
    <BlogPage
      posts={posts}
      totalPosts={totalPosts}
      totalPages={totalPages}
      currentPage={currentPage}
      title="Blog"
      description="Read our latest articles about hair transplants, techniques, and patient experiences."
      locale="en"
      searchPlaceholder="Search articles..."
      noResultsText="No articles found matching your search criteria."
    />
  );
} 