import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with us for a free consultation about your hair transplant procedure.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <ContactForm lang="en" />
        </div>
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-lg font-semibold text-gray-900">Other Ways to Reach Us</h3>
          <dl className="mt-6 space-y-4 text-base leading-7 text-gray-600">
            <div className="flex justify-center gap-x-4">
              <dt className="font-semibold text-gray-900">Address:</dt>
              <dd>Istanbul, Turkey</dd>
            </div>
            <div className="flex justify-center gap-x-4">
              <dt className="font-semibold text-gray-900">Phone:</dt>
              <dd>+90 XXX XXX XX XX</dd>
            </div>
            <div className="flex justify-center gap-x-4">
              <dt className="font-semibold text-gray-900">Email:</dt>
              <dd>info@thehairistanbul.com</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 