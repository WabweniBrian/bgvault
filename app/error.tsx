"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";

function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 text-center">
      <div className="relative h-[200px] w-[200px]">
        <Image
          src="/error.png"
          alt="Not Found"
          className="object-contain"
          fill
        />
      </div>
      <h2 className="text-4xl text-red-500">Something went wrong!</h2>
      <p>
        It may be Network issues or internal server error, try refreshing the
        page
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}

export default ErrorPage;
