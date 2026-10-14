import { Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-semibold">Next.js 16.4 + Drizzle + shadcn</h1>
      <Button>
        <Rocket /> Hello
      </Button>
    </main>
  );
}
