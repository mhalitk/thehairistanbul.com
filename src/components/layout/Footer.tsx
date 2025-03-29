import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="The Hair Istanbul Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <h3 className="text-lg font-semibold">The Hair Istanbul</h3>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Professional hair transplant clinic in Istanbul, Turkey. Specializing in FUE and DHI methods.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Istanbul, Turkey</li>
              <li>Phone: +90 541 951 99 65</li>
              <li>Email: info@thehairistanbul.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Hair Istanbul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 