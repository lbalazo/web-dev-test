import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
}
export default function MobilePagination({
  currentPage,
  totalPages,
  onPageClick,
}: PaginationControlsProps) {
  return (
    <div className="flex sm:hidden gap-2 justify-center items-center">
      <Button
        variant="outline"
        className="w-9 h-9 p-0 cursor-pointer"
        onClick={() => onPageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <span className="text-sm text-gray-500">
        {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        className="w-9 h-9 p-0 cursor-pointer"
        onClick={() => onPageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
