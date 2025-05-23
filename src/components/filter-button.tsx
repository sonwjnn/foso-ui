import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface FilterButtonProps {
  className?: string;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function FilterButton({
  title,
  className,
  isActive,
  onClick,
}: FilterButtonProps) {
  return (
    <Button
      variant="filter"
      className={cn(
        "relative overflow-hidden",
        isActive && "ring-2 ring-blue-500",
        className
      )}
      onClick={onClick}
    >
      {title}
      {isActive && (
        <>
          <div className="absolute -top-12 -right-5 w-12 h-12 bg-blue-500 transform rotate-[40deg] origin-bottom-left x"></div>
          <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center">
            <svg
              className="size-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </>
      )}
    </Button>
  );
}
