import PageContainer from "@/components/layout/page-container";
import { Textarea } from "@/components/ui/textarea";

export default function Page(){
  return (
    <PageContainer>
      <div className="flex w-full gap-2">
        <Textarea className="flex-1 w-full h-full "/>
        <Textarea className="flex-1 w-full h-full "/>
      </div>
    </PageContainer>
  )
}