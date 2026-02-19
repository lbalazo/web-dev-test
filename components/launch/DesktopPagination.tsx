import { Button } from "../ui/button";
import { PaginationControlsProps } from "./MobilePagination";

export default function DesktopPagination({
  currentPage,
  totalPages,
  onPageClick,
}: PaginationControlsProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="hidden lg:flex gap-1 justify-center items-center">
      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          onClick={() => onPageClick(page)}
          className="w-9 h-9 p-0 cursor-pointer"
        >
          {page}
        </Button>
      ))}
    </div>
  );
}
