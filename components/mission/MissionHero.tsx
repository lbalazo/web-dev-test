import Image from "next/image";
import { Launch } from "@/app/types/launch";
import { Badge } from "@/components/ui/badge";

interface MissionHeroProps {
  launch: Launch;
}

export default function MissionHero({ launch }: MissionHeroProps) {
  const {
    success,
    flight_number: flightNumber,
    date_utc: date,
    links: {
      patch: { small },
    },
  } = launch;

  const fallBackImg = "/fallback.png";

  return (
    <div className="flex flex-col items-center text-center gap-4 mb-8">
      <Image
        src={small ?? fallBackImg}
        alt={launch.name}
        width={300}
        height={300}
        priority={true}
        loading={"eager"}
      />
      <h1 className="text-3xl font-bold">{launch.name}</h1>
      <div className="flex gap-2 items-center">
        <Badge
          className={
            success
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }
        >
          {success ? "Success" : "Failed"}
        </Badge>
        <span className="text-gray-500 text-sm">Flight #{flightNumber}</span>
        <span className="text-gray-500 text-sm">
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
