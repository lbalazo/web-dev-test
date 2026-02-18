import { getLaunches } from "@/lib/spacex";
import LaunchList from "@/components/launch/LaunchList";

export default async function Home() {
  const launches = await getLaunches();

  return (
    <div className="container mx-auto p-6">
      <LaunchList launches={launches} />
    </div>
  );
}
