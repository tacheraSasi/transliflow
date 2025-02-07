import PageContainer from '@/components/layout/page-container';
import { Textarea } from '@/components/ui/textarea';

export default function Page() {
  return (
    <PageContainer>
      <div className='flex w-full gap-2'>
        <div className='h-full w-full flex-1'>
          <p>Original</p>
          <Textarea className='h-full w-full' />
        </div>
        <div className='h-full w-full flex-1'>
          <p>Translated</p>
          <Textarea className='h-full w-full' />
        </div>
      </div>
    </PageContainer>
  );
}
