"use client";

import { AIInputWithSearch } from "@/features/chat/ai-input-with-search";

export function AIInputWithSearchDemo() {
  return (
    <div className="min-w-[950px]">
      <div>
        <AIInputWithSearch
          onSubmit={(value, withSearch) => {
            console.log("Message:", value);
            console.log("Search enabled:", withSearch);
          }}
          onFileSelect={(file) => {
            console.log("Selected file:", file);
          }}
        />
      </div>
    </div>
  );
}
