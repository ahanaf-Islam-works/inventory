import { FC } from "react";
import { cn } from "@/lib/utils";
interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
  center?: boolean;
  col?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

interface DivWrapperProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  col?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
const Wrapper: FC<WrapperProps> = ({
  children,
  className,
  fullScreen,
  center,
  col,
}) => {
  return (
    <section
      className={cn(
        "mx-auto  bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 justify-center flex flex-col",
        className,
        fullScreen ? "min-h-screen" : "",
        center ? "items-center" : ""
      )}
    >
      <div
        className={cn(
          "pt-4 pb-4 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
          col
            ? col < 6
              ? `grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-${col}`
              : `grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-${col}`
            : ""
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
