import SkeletonLaunchCard from "./SkeletonLaunchCard";

export default function SkeletonLaunchList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <SkeletonLaunchCard key={i} />
      ))}
    </div>
  );
}
