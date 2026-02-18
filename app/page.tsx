import LaunchList from "@/components/launch/LaunchList";
import SearchBar from "@/components/launch/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const params =
    searchParams instanceof Promise ? await searchParams : searchParams;
  const searchQuery = params?.search ?? "";

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <SearchBar />
      </div>

      <LaunchList searchQuery={searchQuery} />
    </div>
  );
}
