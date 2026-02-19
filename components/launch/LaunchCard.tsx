import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Launch } from "@/app/types/launch";

interface LaunchCardProps {
  launch: Launch;
}

export default function LaunchCard({ launch }: LaunchCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="flex flex-col items-center text-center">
        {launch.links.patch.small && (
          <Image
            src={launch.links.patch.small}
            alt={launch.name}
            height={250}
            width={250}
            className="h-[250px] w-[250px] cover"
          />
        )}
        <h3 className="text-lg font-semibold">{launch.name}</h3>
        <p className="text-sm text-gray-500">
          {new Date(launch.date_utc).toLocaleDateString()}
        </p>
        <Button asChild className="mt-2">
          <Link href={`/mission/${launch.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
