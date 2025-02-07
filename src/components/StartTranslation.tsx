"use client";

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Languages } from 'lucide-react';
import { useState } from "react";
import { useRouter } from 'next/navigation';

export function StartTranslation() {
  const [title, setTitle] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  
  const router = useRouter();

  const handleStart = () => {
    router.push(`/dashboard/translate?title=${title}&from=${from}&to=${to}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex items-center gap-2'>
          <Languages size={20} />
          Translate
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Start New Translation</DialogTitle>
          <DialogDescription>
            Select source and target languages, then upload the file you want to
            translate.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='title' className='text-right'>
              Title
            </Label>
            <Input
              className='w-[180px]'
              placeholder='Title here'
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='lang-from' className='text-right'>
              From
            </Label>
            <Select value={from} onValueChange={setFrom}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Choose the language' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='English'>English</SelectItem>
                  <SelectItem value='Spanish'>Spanish</SelectItem>
                  <SelectItem value='French'>French</SelectItem>
                  <SelectItem value='German'>German</SelectItem>
                  <SelectItem value='Chinese'>Chinese</SelectItem>
                  <SelectItem value='Swahili'>Swahili</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='lang-to' className='text-right'>
              To
            </Label>
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Choose the language' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='English'>English</SelectItem>
                  <SelectItem value='Spanish'>Spanish</SelectItem>
                  <SelectItem value='French'>French</SelectItem>
                  <SelectItem value='German'>German</SelectItem>
                  <SelectItem value='Chinese'>Chinese</SelectItem>
                  <SelectItem value='Swahili'>Swahili</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type='button' className='w-full' onClick={handleStart}>
            Start Translation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}