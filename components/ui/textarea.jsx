import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[275px] w-full rounded-xl border border-input bg-white/50 px-3 py-2 text-base shadow-md placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        className
      )}
      draggable="false"
      style={{ userDrag: "none", WebkitUserDrag: "none" }}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
