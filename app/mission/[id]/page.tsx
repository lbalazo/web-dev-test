import { getLaunch, getRocket } from "@/lib/spacex";
import { Launch, Rocket } from "@/app/types/launch";
import MissionDetail from "@/components/mission/MissionDetail";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;
  const launch: Launch = await getLaunch(id);
  return {
    title: `${launch.name} | SpaceX Missions`,
    description: launch.details ?? `Details for SpaceX mission ${launch.name}`,
  };
}

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
