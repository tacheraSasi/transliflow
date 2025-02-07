import { SearchParams } from 'nuqs/server';
import ProfileViewPage from '@/features/profile/components/profile-view-page';
export const revalidate = 0;
type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Profile'
};

export default async function Page({ searchParams }: pageProps) {
  return <ProfileViewPage />;
}
