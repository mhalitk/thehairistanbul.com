import HomeLayout from '@/components/layouts/HomeLayout';
import { homeContent } from '@/content/en/home';

export default function Home() {
  return <HomeLayout content={homeContent} locale="en" />;
} 