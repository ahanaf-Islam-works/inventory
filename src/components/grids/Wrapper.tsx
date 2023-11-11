import { FC } from "react";
import { cn } from "@/lib/utils";
interface WrapperProps {
  children: React.ReactNode;
  props?: any;
  className?: string;
  fullScreen?: boolean;
  center?: boolean;
  col?: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  singleContent?: boolean;
}

const Wrapper: FC<WrapperProps> = ({
  children,
  className,
  fullScreen,
  center,
  col,
  props,
  singleContent,
}) => {
  return (
    <section
      {...props}
      className={cn(
        "mx-auto  bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 justify-center flex flex-col",
        className,
        fullScreen ? "min-h-screen" : "",
        center ? "items-center" : "",
        // if contents number more than 1, then add padding top and bottom
        singleContent ? " -mt-16 sm:-mt-5 md:-mt-10 lg:-mt-12" : ""
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

export const DivSmall: FC<WrapperProps> = ({ children, className, props }) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 pt-4 pb-4 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const DivWrapper: FC<WrapperProps> = ({
  children,
  className,
  fullScreen,
  center,
  col,
  props,
}) => {
  return (
    <div
      {...props}
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
    </div>
  );
};

export default Wrapper;
