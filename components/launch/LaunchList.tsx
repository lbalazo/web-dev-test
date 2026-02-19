import { Launch } from "@/app/types/launch";
import LaunchCard from "./LaunchCard";
import { queryLaunches } from "@/lib/spacex";
import Pagination from "./Pagination";

interface LaunchListProps {
  searchQuery?: string;
  status?: boolean;
  sort: "asc" | "desc";
  page: number;
}

export default async function LaunchList({
  searchQuery,
  status,
  sort,
  page = 1,
}: LaunchListProps) {
  const queryBody = {
    query: {
      name: { $regex: searchQuery, $options: "i" },
      ...(status !== undefined && { success: status }),
    },
    options: { sort: { date_utc: sort }, limit: 18, page },
  };

  const data = await queryLaunches(queryBody);
  const launches: Launch[] = data.docs;
  const totalPages = data.totalPages;

  return (
    <div className="flex flex-col gap-12 lg:mb-64 mb-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {launches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}
