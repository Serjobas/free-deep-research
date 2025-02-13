import { AIInputWithSearchDemo } from "@/features/chat/ai-input-with-search-demo";
import HeroBadge from "@/components/ui/hero-badge";
import { Brain, Globe2, Microscope } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <AIInputWithSearchDemo />
      <div className="mt-4 pb-10 flex-wrap overflow-x-auto flex gap-2 justify-center">
        <HeroBadge
          text="Find healthy restaraunts at Bangkok"
          icon={<Brain />}
        />
        <HeroBadge
          text="Sustainable energy solutions in developing countries"
          icon={<Globe2 />}
        />
        <HeroBadge
          text="Microbiome's role in mental health"
          icon={<Microscope />}
        />
      </div>
    </main>
  );
}
