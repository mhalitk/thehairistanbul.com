import HomeLayout from '@/components/layouts/HomeLayout';
import { homeContent } from '@/content/ru/home';

export default function Home() {
  return <HomeLayout content={homeContent} locale="ru" />;
} 