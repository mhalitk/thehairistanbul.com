import Link from 'next/link';

const services = [
  {
    name: 'FUE Hair Transplant',
    description: 'Follicular Unit Extraction (FUE) is a modern hair transplant technique that involves extracting individual hair follicles from the donor area and transplanting them to the recipient area.',
    features: [
      'Minimal scarring',
      'Faster recovery time',
      'Natural-looking results',
      'Suitable for various hair types',
    ],
  },
  {
    name: 'DHI Hair Transplant',
    description: 'Direct Hair Implantation (DHI) is an advanced technique where hair follicles are extracted and implanted directly into the recipient area using a specialized tool.',
    features: [
      'No need for recipient site creation',
      'Higher graft survival rate',
      'Precise control over hair direction',
      'Minimal trauma to the scalp',
    ],
  },
  {
    name: 'Combined FUE & DHI',
    description: 'A hybrid approach that combines the benefits of both FUE and DHI techniques for optimal results.',
    features: [
      'Customized treatment plan',
      'Maximum graft survival',
      'Natural hairline design',
      'Reduced recovery time',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a range of advanced hair transplant techniques to help you achieve your desired results.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <Link
                      href="/contact"
                      className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      Get a free consultation <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
                <dd className="mt-6">
                  <ul role="list" className="space-y-3 text-sm leading-6 text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 