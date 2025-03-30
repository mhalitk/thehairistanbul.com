'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface PhoneConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  locale: 'en' | 'ru';
}

export default function PhoneConsultationPopup({ isOpen, onClose, locale }: PhoneConsultationPopupProps) {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Phone Consultation Request',
          phone,
          country: 'Not specified',
          message: 'Request for phone consultation',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitStatus('success');
      setPhone('');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = {
    en: {
      title: 'Schedule Your Free Consultation',
      description: 'Please enter your phone number and we will contact you shortly.',
      placeholder: 'Enter your phone number',
      submit: 'Submit',
      success: 'Thank you! We will contact you shortly.',
      error: 'Something went wrong. Please try again.',
    },
    ru: {
      title: 'Запланируйте бесплатную консультацию',
      description: 'Пожалуйста, введите ваш номер телефона, и мы свяжемся с вами в ближайшее время.',
      placeholder: 'Введите ваш номер телефона',
      submit: 'Отправить',
      success: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
      error: 'Что-то пошло не так. Пожалуйста, попробуйте снова.',
    },
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      {content[locale].title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {content[locale].description}
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-4">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={content[locale].placeholder}
                        className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-base"
                        required
                      />
                      {submitStatus === 'success' && (
                        <p className="mt-2 text-sm text-green-600">{content[locale].success}</p>
                      )}
                      {submitStatus === 'error' && (
                        <p className="mt-2 text-sm text-red-600">{content[locale].error}</p>
                      )}
                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? '...' : content[locale].submit}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 