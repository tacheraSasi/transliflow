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
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Languages } from 'lucide-react';

export function StartTranslation() {
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
            <Label htmlFor='lang-from' className='text-right'>
              Title
            </Label>
            <Input className='w-[180px]' placeholder='Title here' name="title"/>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='lang-from' className='text-right'>
              From
            </Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Choose the language' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>English</SelectLabel> */}
                  <SelectItem value='en'>English</SelectItem>
                  <SelectItem value='es'>Spanish</SelectItem>
                  <SelectItem value='fr'>French</SelectItem>
                  <SelectItem value='de'>German</SelectItem>
                  <SelectItem value='zh'>Chinese</SelectItem>
                  <SelectItem value='sw'>Swahili</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='lang-to' className='text-right'>
              To
            </Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Choose the language' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>English</SelectLabel> */}
                  <SelectItem value='en'>English</SelectItem>
                  <SelectItem value='es'>Spanish</SelectItem>
                  <SelectItem value='fr'>French</SelectItem>
                  <SelectItem value='de'>German</SelectItem>
                  <SelectItem value='zh'>Chinese</SelectItem>
                  <SelectItem value='sw'>Swahili</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='file' className='text-right'>
              File
            </Label>
            <Input
              id='file'
              type='file'
              className='col-span-3'
              accept='.docx,.xlsx,.pptx,.pdf,.txt'
            />
          </div> */}
        </div>
        <DialogFooter>
          <Button type='submit' className='w-full'>
            Start Translation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
