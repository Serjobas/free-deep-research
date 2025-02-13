"use client";

import { Telescope, Square, ArrowUp } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/components/hooks/use-auto-resize-textarea";

interface AIInputWithSearchProps {
  id?: string;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  onSubmit?: (value: string, withSearch: boolean) => void;
  onFileSelect?: (file: File) => void;
  className?: string;
}

export function AIInputWithSearch({
  id = "ai-input-with-search",
  placeholder = "Search the web...",
  minHeight = 48,
  maxHeight = 164,
  className,
}: AIInputWithSearchProps) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight,
    maxHeight,
  });

  const handleSubmit = () => {
    if (value.trim()) {
      setIsLoading(true);
      // onSubmit?.(value, showSearch);
      setValue("");
      adjustHeight(true);
    }
  };

  return (
    <div className={cn("w-full py-4", className)}>
      <div className="relative max-w-xl w-full mx-auto">
        <div className="relative flex flex-col">
          <div
            className="overflow-y-auto"
            style={{ maxHeight: `${maxHeight}px` }}
          >
            <Textarea
              id={id}
              value={value}
              placeholder={placeholder}
              className="w-full rounded-3xl rounded-b-none px-4 py-4 bg-black/5 dark:bg-white/5 border-none dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70 resize-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 leading-[1.2]"
              ref={textareaRef}
              onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setValue(e.target.value);
                adjustHeight();
              }}
            />
          </div>

          <div className="pb-2 bg-black/5 dark:bg-white/5 rounded-b-3xl flex justify-between px-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className={cn(
                  "rounded-full cursor-default transition-all flex items-center gap-2 px-1.5 py-1 border h-8",
                  true
                    ? "bg-sky-500/15 border-sky-400 text-sky-500"
                    : "bg-black/5 dark:bg-white/5 border-transparent text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                )}
              >
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{
                      rotate: true ? 0 : 180,
                      scale: true ? 1.1 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                    }}
                  >
                    <Telescope
                      className={cn(
                        "w-4 h-4",
                        true ? "text-sky-500" : "text-inherit"
                      )}
                    />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {true && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{
                        width: "auto",
                        opacity: 1,
                      }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm overflow-hidden whitespace-nowrap text-sky-500 flex-shrink-0"
                    >
                      Deep Research
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
            <div className="">
              <button
                type="button"
                onClick={() => {
                  if (!!value.trim()) {
                    handleSubmit();
                  } else if (isLoading) {
                    setIsLoading(false);
                  }
                }}
                className={cn(
                  "rounded-3xl w-9 h-9 flex items-center justify-center transition-colors",
                  value || isLoading
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 cursor-default"
                )}
              >
                {isLoading ? (
                  <Square fill="currentColor" className="w-4 h-4" />
                ) : (
                  <ArrowUp className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
