'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const navigationRu = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/services' },
  { name: 'О нас', href: '/about' },
  { name: 'Галерея', href: '/gallery' },
  { name: 'Блог', href: '/blog' },
  { name: 'Контакты', href: '/contact' },
];

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
];

export default function Header() {
  const pathname = usePathname();
  const currentLang = pathname.startsWith('/ru') ? 'ru' : 'en';

  const switchLanguage = (langCode: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${langCode}`);
    window.location.href = newPath;
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={`/${currentLang}`} className="flex items-center space-x-2">
                    <Image
                      src="/logo.svg"
                      alt="The Hair Istanbul Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10"
                    />
                    <span className="text-xl font-semibold text-[#D4AF37]">The Hair Istanbul</span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={`/${currentLang}${item.href}`}
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-[#D4AF37] hover:text-gray-700"
                    >
                      {currentLang === 'ru' ? navigationRu.find(nav => nav.href === item.href)?.name : item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2">
                    <span className="sr-only">Open language menu</span>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#D4AF37]/10 px-2 py-1 text-xs font-medium text-[#D4AF37] ring-1 ring-inset ring-[#D4AF37]/20">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                      </svg>
                      {languages.find(lang => lang.code === currentLang)?.name}
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {languages.map((lang) => (
                        <Menu.Item key={lang.code}>
                          {({ active }) => (
                            <button
                              onClick={() => switchLanguage(lang.code)}
                              className={`${
                                active ? 'bg-[#D4AF37]/10' : ''
                              } block w-full px-4 py-2 text-left text-sm text-gray-700`}
                            >
                              {lang.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D4AF37]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/${currentLang}${item.href}`}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-[#D4AF37] hover:bg-gray-50 hover:text-gray-700"
                >
                  {currentLang === 'ru' ? navigationRu.find(nav => nav.href === item.href)?.name : item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-[#D4AF37]/10 hover:text-gray-800"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 