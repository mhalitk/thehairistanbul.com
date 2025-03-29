import Image from 'next/image';

const gallery = [
  {
    id: 1,
    title: 'Before & After - FUE Method',
    description: 'Patient showing significant improvement after FUE hair transplant procedure.',
    beforeImage: '/images/gallery/placeholder.jpg',
    afterImage: '/images/gallery/placeholder.jpg',
  },
  {
    id: 2,
    title: 'Before & After - DHI Method',
    description: 'Natural-looking results achieved through DHI hair transplant technique.',
    beforeImage: '/images/gallery/placeholder.jpg',
    afterImage: '/images/gallery/placeholder.jpg',
  },
  {
    id: 3,
    title: 'Before & After - Combined Method',
    description: 'Excellent results using our combined FUE and DHI approach.',
    beforeImage: '/images/gallery/placeholder.jpg',
    afterImage: '/images/gallery/placeholder.jpg',
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Before & After Gallery
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            View our collection of successful hair transplant results. Each case is unique, and we customize our approach to achieve the best possible outcome for each patient.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {gallery.map((item) => (
            <article key={item.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Before</h3>
                    <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.beforeImage}
                        alt={`Before - ${item.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">After</h3>
                    <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={item.afterImage}
                        alt={`After - ${item.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-6 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-500">
                    2024
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {item.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Note: Results may vary from person to person. Each patient's outcome depends on various factors including their individual characteristics and adherence to post-operative care instructions.
          </p>
        </div>
      </div>
    </div>
  );
} 