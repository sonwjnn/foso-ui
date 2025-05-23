import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const maxVisiblePages = 5;

  const generatePagination = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const firstPage = 1;
    const lastPage = totalPages;

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", lastPage];
    }

    if (currentPage >= totalPages - 2) {
      return [
        firstPage,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      firstPage,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      lastPage,
    ];
  };

  const pages = generatePagination();

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pages.map((page, i) => (
        <Button
          key={i}
          variant={page === currentPage ? "default" : "outline"}
          className={`${page === currentPage ? "bg-blue-600" : ""}`}
          onClick={() => {
            if (typeof page === "number") {
              onPageChange(page);
            }
          }}
          disabled={typeof page !== "number"}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
