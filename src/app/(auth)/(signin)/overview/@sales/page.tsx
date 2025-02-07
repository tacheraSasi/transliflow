import { delay } from '@/constants/mock-api';
import { RecentSales } from '@/features/overview/components/recent-sales';
export const revalidate = 0;
export default async function Sales() {
  await delay(3000);
  return <RecentSales />;
}
