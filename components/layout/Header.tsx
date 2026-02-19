import Link from "next/link";
import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black">
      <div className="container mx-auto px-6 h-16 flex items-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-white hover:text-gray-200 transition-colors"
        >
          <Rocket className="w-5 h-5" />
          SpaceX Missions
        </Link>
      </div>
    </header>
  );
}
