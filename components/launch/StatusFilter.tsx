"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { Button } from "../ui/button";

export default function StatusFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchParamsRef = useRef(searchParams);

  useEffect(() => {
    searchParamsRef.current = searchParams;
  }, [searchParams]);

  const current = searchParams?.get("success") ?? "";
  const sort = searchParams?.get("sort") ?? "asc";

  function buildParams() {
    const params = new URLSearchParams();
    const search = searchParamsRef.current?.get("search");
    const currentSort = searchParamsRef.current?.get("sort");
    if (search) params.set("search", search);
    if (currentSort) params.set("sort", currentSort);
    return params;
  }

  function handleStatusClick(value: string) {
    const params = buildParams();
    if (current !== value) params.set("success", value);
    router.replace(`/?${params.toString()}`);
  }

  function handleSortClick() {
    const params = buildParams();
    const currentSuccess = searchParamsRef.current?.get("success");
    if (currentSuccess) params.set("success", currentSuccess);
    params.set("sort", sort === "asc" ? "desc" : "asc");
    router.replace(`/?${params.toString()}`);
  }

  return (
    <div className="flex gap-2">
      <Button
        variant={current === "true" ? "default" : "outline"}
        onClick={() => handleStatusClick("true")}
        className={
          current === "true"
            ? "bg-green-500 hover:bg-green-600 text-white border-0"
            : ""
        }
      >
        Success
      </Button>
      <Button
        variant={current === "false" ? "default" : "outline"}
        onClick={() => handleStatusClick("false")}
        className={
          current === "false"
            ? "bg-red-500 hover:bg-red-600 text-white border-0"
            : ""
        }
      >
        Failed
      </Button>
      <Button variant="outline" onClick={handleSortClick}>
        Date {sort === "asc" ? "↑" : "↓"}
      </Button>
    </div>
  );
}
