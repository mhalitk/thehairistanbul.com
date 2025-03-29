'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  country: string;
  message: string;
};

interface ContactFormProps {
  lang: 'en' | 'ru';
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const translations = {
    en: {
      title: 'Contact Us',
      name: 'Name',
      phone: 'Phone',
      country: 'Country',
      message: 'Message',
      submit: 'Send Message',
      success: 'Thank you for your message. We will contact you soon!',
      error: 'Something went wrong. Please try again.',
      required: 'This field is required',
    },
    ru: {
      title: 'Свяжитесь с нами',
      name: 'Имя',
      phone: 'Телефон',
      country: 'Страна',
      message: 'Сообщение',
      submit: 'Отправить сообщение',
      success: 'Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время!',
      error: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
      required: 'Это поле обязательно для заполнения',
    },
  };

  const t = translations[lang];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {t.name}
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: t.required })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          {t.phone}
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: t.required })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          {t.country}
        </label>
        <input
          type="text"
          id="country"
          {...register('country', { required: t.required })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4"
        />
        {errors.country && (
          <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          {t.message}
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: t.required })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-3 px-4"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
        >
          {isSubmitting ? '...' : t.submit}
        </button>
      </div>

      {submitStatus === 'success' && (
        <p className="text-sm text-green-600">{t.success}</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-sm text-red-600">{t.error}</p>
      )}
    </form>
  );
} 