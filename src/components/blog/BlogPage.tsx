'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { BlogPost } from '@/types/blog';

interface BlogPageProps {
  posts: BlogPost[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  title: string;
  description: string;
  locale: string;
  searchPlaceholder: string;
  noResultsText: string;
}

export default function BlogPage({
  posts,
  totalPosts,
  totalPages,
  currentPage,
  title,
  description,
  locale,
  searchPlaceholder,
  noResultsText,
}: BlogPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Initialize search query from URL
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('search', searchQuery);
    searchParams.set('page', '1');
    window.location.href = `${window.location.pathname}?${searchParams.toString()}`;
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>

        <form onSubmit={handleSearch} className="mt-8">
          <div className="flex gap-x-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="flex-1 rounded-md border-0 px-4 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Search
            </button>
          </div>
        </form>

        {posts.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600">{noResultsText}</p>
          </div>
        ) : (
          <>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="flex flex-col items-start">
                  <div className="relative w-full">
                    <div className="relative mt-2 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-6 flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="text-gray-500">
                        {new Date(post.date).toLocaleDateString(locale, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600">
                        {post.category}
                      </span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={`/${locale}/blog/${post.slug}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-16 flex justify-center">
                <nav className="flex items-center gap-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    const searchParams = new URLSearchParams(window.location.search);
                    searchParams.set('page', page.toString());
                    if (searchQuery) {
                      searchParams.set('search', searchQuery);
                    }
                    const isActive = page === currentPage;

                    return (
                      <Link
                        key={page}
                        href={`${window.location.pathname}?${searchParams.toString()}`}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                          isActive
                            ? 'z-10 bg-blue-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                            : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                        }`}
                      >
                        {page}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
} 