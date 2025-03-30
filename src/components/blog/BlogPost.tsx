import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost as BlogPostType } from '@/types/blog';

interface BlogPostProps {
  post: BlogPostType | null;
  locale: string;
  backToBlogText: string;
  notFoundTitle: string;
  notFoundDescription: string;
}

export default function BlogPost({ post, locale, backToBlogText, notFoundTitle, notFoundDescription }: BlogPostProps) {
  if (!post) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1>
            {notFoundTitle}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {notFoundDescription}
          </p>
          <div className="mt-10">
            <Link
              href={`/${locale}/blog`}
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {backToBlogText}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-x-4 text-xs">
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
            <h1>
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              className="mt-8 prose prose-lg prose-blue mx-auto prose-headings:font-bold  prose-h3:text-2xl prose-p:text-gray-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-blue-200 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-10">
              <Link
                href={`/${locale}/blog`}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {backToBlogText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 