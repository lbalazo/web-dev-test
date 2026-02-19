import { getLaunch, getRocket } from "@/lib/spacex";
import { Launch, Rocket } from "@/app/types/launch";
import MissionDetail from "@/components/mission/MissionDetail";

export default async function MissionPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const launch: Launch = await getLaunch(id);
  const rocket: Rocket = await getRocket(launch.rocket);

  return <MissionDetail launch={launch} rocket={rocket} />;
}
