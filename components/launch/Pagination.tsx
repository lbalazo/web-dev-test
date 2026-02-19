"use client";

import { useRouter, useSearchParams } from "next/navigation";
import MobilePagination from "./MobilePagination";
import DesktopPagination from "./DesktopPagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handlePageClick(page: number) {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set("page", page.toString());
    router.replace(`/?${params.toString()}`);
  }

  return (
    <div className="flex gap-2 justify-center flex-wrap">
      <MobilePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageClick={handlePageClick}
      />
      <DesktopPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageClick={handlePageClick}
      />
    </div>
  );
}
