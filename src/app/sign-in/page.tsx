import { Metadata } from 'next';
import SignInViewPage from '@/features/auth/components/sigin-view';
export const revalidate = 0;
export const metadata: Metadata = {
  title: 'Transliflow | Sign In',
  description: 'Sign In to Transliflow'
};

export default async function Page() {
  return <SignInViewPage />;
}
