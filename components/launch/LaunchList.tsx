import { Launch } from "@/app/types/launch";
import LaunchCard from "./LaunchCard";

interface LaunchListProps {
  launches: Launch[];
}

export default function LaunchList({ launches }: LaunchListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {launches.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </div>
  );
}
