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

  function handleClick(value: string) {
    const params = new URLSearchParams();
    const search = searchParamsRef.current?.get("search");

    if (search) params.set("search", search);
    if (current !== value) params.set("success", value);

    router.replace(`/?${params.toString()}`);
  }

  return (
    <div className="flex gap-2">
      <Button
        variant={current === "true" ? "default" : "outline"}
        onClick={() => handleClick("true")}
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
        onClick={() => handleClick("false")}
        className={
          current === "false"
            ? "bg-red-500 hover:bg-red-600 text-white border-0"
            : ""
        }
      >
        Failed
      </Button>
    </div>
  );
}
