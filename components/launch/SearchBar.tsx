"use client";

import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initial = searchParams?.get("search") ?? "";

  const [query, setQuery] = useState(initial);
  const searchParamsRef = useRef(searchParams);

  useEffect(() => {
    searchParamsRef.current = searchParams;
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams();
      const success = searchParamsRef.current?.get("success");

      if (query) params.set("search", query);
      if (success) params.set("success", success);

      router.replace(`/?${params.toString()}`);
    }, 500);

    return () => clearTimeout(handler);
  }, [query, router]);

  return (
    <div className="w-full lg:w-1/3">
      <label htmlFor="search" className="sr-only">
        Search launches
      </label>
      <Input
        id="search"
        type="text"
        placeholder="Search mission..."
        aria-label="Search launches"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
