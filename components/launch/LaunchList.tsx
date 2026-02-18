import { Launch } from "@/app/types/launch";
import LaunchCard from "./LaunchCard";
import { queryLaunches } from "@/lib/spacex";

interface LaunchListProps {
  searchQuery?: string;
}

export default async function LaunchList({ searchQuery }: LaunchListProps) {
  const queryBody = {
    query: { name: { $regex: searchQuery, $options: "i" } },
    options: { sort: { date_utc: "asc" }, limit: 20 },
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
