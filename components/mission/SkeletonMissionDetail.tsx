import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function SkeletonMissionDetail() {
  return (
    <div className="container mx-auto p-6 max-w-4xl animate-pulse">
      <div className="flex flex-col items-center text-center gap-4 mb-8">
        <div className="bg-gray-300 h-[300px] w-[300px] rounded-md" />
        <div className="bg-gray-300 h-9 w-64 rounded" />
        <div className="flex gap-2 items-center">
          <div className="bg-gray-300 h-5 w-16 rounded-full" />
          <div className="bg-gray-300 h-4 w-16 rounded" />
          <div className="bg-gray-300 h-4 w-24 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="bg-gray-300 h-6 w-36 rounded" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="bg-gray-300 w-full h-24 rounded" />
            <div className="flex gap-2">
              <div className="bg-gray-300 h-9 w-36 rounded" />
              <div className="bg-gray-300 h-9 w-28 rounded" />
              <div className="bg-gray-300 h-9 w-24 rounded" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="bg-gray-300 h-6 w-24 rounded" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="bg-gray-300 h-7 w-32 rounded" />
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-300 h-16 rounded" />
              <div className="bg-gray-300 h-16 rounded" />
              <div className="bg-gray-300 h-16 rounded" />
            </div>
            <div className="bg-gray-300 w-full h-24 rounded" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
