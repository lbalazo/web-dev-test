import Link from "next/link";

// Footer
export default function Footer() {
  return (
    <footer className="bg-black mt-auto">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} SpaceX Missions
        </p>
        <div className="flex gap-4 text-sm text-gray-300">
          <Link
            href="https://github.com/r-spacex/SpaceX-API"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            SpaceX API
          </Link>
        </div>
      </div>
    </footer>
  );
}
