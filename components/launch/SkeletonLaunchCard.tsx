import { Card, CardContent } from "@/components/ui/card";

export default function SkeletonLaunchCard() {
  return (
    <Card className="animate-pulse">
      <CardContent className="flex flex-col items-center text-center">
        <div className="bg-gray-300 h-[250px] w-[250px] mb-2 rounded-md" />
        <div className="bg-gray-300 h-6 w-32 mb-1 rounded" />
        <div className="bg-gray-300 h-4 w-20 rounded" />
        <div className="bg-gray-300 h-8 w-32 mt-2 rounded" />
      </CardContent>
    </Card>
  );
}
