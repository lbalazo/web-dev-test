import { Launch } from "@/app/types/launch";
import LaunchCard from "./LaunchCard";
import { queryLaunches } from "@/lib/spacex";

interface LaunchListProps {
  searchQuery?: string;
  status?: boolean;
  sort: "asc" | "desc";
}

export default async function LaunchList({
  searchQuery,
  status,
  sort,
}: LaunchListProps) {
  const queryBody = {
    query: {
      name: { $regex: searchQuery, $options: "i" },
      ...(status !== undefined && { success: status }),
    },
    options: { sort: { date_utc: sort }, limit: 18 },
  };

  const data = await queryLaunches(queryBody);
  const launches: Launch[] = data.docs;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {launches.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </div>
  );
}
