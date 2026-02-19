import Image from "next/image";
import Link from "next/link";
import { Launch, Rocket } from "@/app/types/launch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LaunchCard from "./LaunchCard";
import RocketCard from "./RocketCard";
import MissionHero from "./MissionHero";

interface MissionDetailProps {
  launch: Launch;
  rocket: Rocket;
}

export default function MissionDetail({ launch, rocket }: MissionDetailProps) {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <MissionHero launch={launch} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LaunchCard launch={launch} />
        <RocketCard rocket={rocket} />
      </div>
    </div>
  );
}
