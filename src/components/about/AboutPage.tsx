import Image from 'next/image';

interface AboutContent {
  title: string;
  description: string;
  mission: {
    title: string;
    text: string;
  };
  whyUs: {
    title: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  facilities: {
    title: string;
    description: string;
    features: string[];
  };
  stats: Array<{
    number: string;
    label: string;
  }>;
}

interface AboutPageProps {
  content: AboutContent;
}

export default function AboutPage({ content }: AboutPageProps) {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      {/* Mission section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {content.mission.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {content.mission.text}
          </p>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-4">
              {content.stats.map((stat) => (
                <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.number}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Us section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {content.whyUs.title}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {content.whyUs.points.map((point) => (
              <div key={point.title} className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.facilities.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {content.facilities.description}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {content.facilities.features.map((feature) => (
                <div key={feature} className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base leading-7 text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 