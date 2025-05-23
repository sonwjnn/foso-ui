import { ChevronDown } from "lucide-react";
import { useState } from "react";
interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
export function FilterSection({
  title,
  children,
  defaultOpen = true,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-zinc-100 p-3">
      <button
        className="flex items-center justify-between w-full text-xl text-[#1C252E] font-semibold mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#1C252E] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="space-y-3">{children}</div>}
    </div>
  );
}
