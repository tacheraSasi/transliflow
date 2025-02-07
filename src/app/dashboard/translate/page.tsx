import PageContainer from '@/components/layout/page-container';
import { Textarea } from '@/components/ui/textarea';

export default function Page() {
  return (
    <PageContainer>
      <div className='flex w-full gap-2'>
        <div className='h-full w-full flex-1'>
          <p>Original</p>
          <Textarea rows={18} className='h-full w-full' placeholder='Paste the original text here...' />
        </div>
        <div className='h-full w-full flex-1'>
          <p>Translated</p>
          <Textarea rows={18} className='h-full w-full' placeholder='Translated output will appear hear...' />
        </div>
      </div>
    </PageContainer>
  );
}
