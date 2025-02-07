import KanbanViewPage from '@/features/kanban/components/kanban-view-page';
export const revalidate = 0;
export const metadata = {
  title: 'Dashboard : Kanban view'
};

export default function page() {
  return <KanbanViewPage />;
}
