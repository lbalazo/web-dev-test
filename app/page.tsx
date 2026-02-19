import LaunchList from "@/components/launch/LaunchList";
import SearchBar from "@/components/launch/SearchBar";
import StatusFilter from "@/components/launch/StatusFilter";

export default async function Home({
  searchParams,
}: {
  searchParams?: { search?: string; success?: string; sort?: string };
}) {
  const params = await searchParams;
  const searchQuery = params?.search ?? "";
  const status =
    params?.success === "true"
      ? true
      : params?.success === "false"
      ? false
      : undefined;

  const sort = params?.sort === "desc" ? "desc" : "asc";

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
        <SearchBar />
        <StatusFilter />
      </div>

      <LaunchList searchQuery={searchQuery} status={status} sort={sort} />
    </div>
  );
}
