import SkeletonLaunchCard from "@/components/launch/SkeletonLaunchCard";

export default function Loading() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonLaunchCard key={i} />
        ))}
      </div>
    </div>
  );
}
