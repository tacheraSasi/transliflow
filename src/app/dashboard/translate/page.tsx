"use client"

import PageContainer from '@/components/layout/page-container';
import { StartTranslation } from '@/components/StartTranslation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const [original,setOriginal] = useState("") 
  const [translated,setTranslated] = useState("") 
  const searchparams = useSearchParams()

  const title = searchparams.get("title")?searchparams.get("title"):"Untitled"
  const from = searchparams.get("from")?searchparams.get("from"):"en"
  const to = searchparams.get("to")?searchparams.get("to"):"sw"

  return (
    <PageContainer>
      <div className='flex flex-1 flex-col space-y-2'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-2xl font-bold tracking-tight'>
            {title}
          </h2>
          <div className='hidden items-center space-x-2 md:flex'>
            <Button>
              Translate
            </Button>
          </div>
        </div>
        <div className='flex w-full gap-2'>
          <div className='h-full w-full flex-1'>
            <p>Original</p>
            <Textarea value={original} rows={18} className='h-full w-full' placeholder='Paste the original text here...' />
          </div>
          <div className='h-full w-full flex-1'>
            <p>Translated</p>
            <Textarea value={translated} rows={18} className='h-full w-full' placeholder='Translated output will appear hear...' />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
