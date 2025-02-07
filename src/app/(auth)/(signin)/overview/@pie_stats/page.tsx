import { delay } from '@/constants/mock-api';
import { PieGraph } from '@/features/overview/components/pie-graph';
export const revalidate = 0;
export default async function Stats() {
  await delay(1000);
  return <PieGraph />;
}
