"use client";

import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const [original, setOriginal] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const searchparams = useSearchParams();
  const title = searchparams.get("title") || "Untitled";
  const from = searchparams.get("from") || "en";
  const to = searchparams.get("to") || "sw";

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/transli", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: original, from, to }),
      });

      const data = await response.json();
      setTranslated(data.translatedText);
    } catch (error) {
      setTranslated("Error translating text.");
    }
    setLoading(false);
  };

  return (
    <PageContainer>
      <div className="flex flex-1 flex-col space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <div className="items-center space-x-2 md:flex">
            <Button onClick={handleTranslate} disabled={loading}>
              {loading ? "Translating..." : "Translate"}
            </Button>
          </div>
        </div>
        <div className="flex w-full gap-2 sm:overflow-x-auto">
          <div className="h-full w-full md:flex-1 sm:w-full">
            <p>Original: {from}</p>
            <Textarea
              value={original}
              onChange={(e) => setOriginal(e.target.value)}
              rows={18}
              className="h-full w-full"
              placeholder="Paste the original text here..."
            />
          </div>
          <div className="h-full w-full md:flex-1 sm:w-full">
            <p>Translated: {to}</p>
            <Textarea
              value={translated}
              onChange={(e)=>setTranslated(e.target.value)}
              rows={18}
              className="h-full w-full"
              placeholder="Translated output will appear here..."
              
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
