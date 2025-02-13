import { Progress } from "@/components/ui/progress";

interface ChatProgressProps {
  title: string;
  sources: number;
  progress: number;
}

export function ChatProgress({ title, sources, progress }: ChatProgressProps) {
  return (
    <div className="w-full border px-4 py-4 text-sm gap-2 rounded-xl max-w-[350px]">
      <div className="flex justify-between">
        <p className="mb-2.5">{title}</p>{" "}
        <a className="text-blue-800" href="#">
          {sources} Sources
        </a>
      </div>
      <Progress value={progress} />
    </div>
  );
}
