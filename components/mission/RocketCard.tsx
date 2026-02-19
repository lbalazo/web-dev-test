import { Rocket } from "@/app/types/launch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RocketCard({ rocket }: { rocket: Rocket }) {
  const hasStats = !!(
    rocket.first_flight ||
    rocket.height.meters ||
    rocket.mass.kg
  );
  const hasDescription = !!rocket.description;

  if (!hasStats && !hasDescription) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>Rocket</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{rocket.name}</h3>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-gray-50 rounded p-3">
            <p className="text-gray-500">First Flight</p>
            <p className="font-medium">{rocket.first_flight}</p>
          </div>
          <div className="bg-gray-50 rounded p-3">
            <p className="text-gray-500">Height</p>
            <p className="font-medium">
              {rocket.height.meters}m / {rocket.height.feet}ft
            </p>
          </div>
          <div className="bg-gray-50 rounded p-3">
            <p className="text-gray-500">Mass</p>
            <p className="font-medium">
              {rocket.mass.kg.toLocaleString()}kg /{" "}
              {rocket.mass.lb.toLocaleString()}lb
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500">{rocket.description}</p>
      </CardContent>
    </Card>
  );
}
