import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Свяжитесь с нами
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Получите бесплатную консультацию по процедуре пересадки волос.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <ContactForm lang="ru" />
        </div>
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-lg font-semibold text-gray-900">Другие способы связи</h3>
          <dl className="mt-6 space-y-4 text-base leading-7 text-gray-600">
            <div className="flex justify-center gap-x-4">
              <dt className="font-semibold text-gray-900">Адрес:</dt>
              <dd>Стамбул, Турция</dd>
            </div>
            <div className="flex justify-center gap-x-4">
              <dt className="font-semibold text-gray-900">Телефон:</dt>
              <dd>+90 541 951 99 65</dd>
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