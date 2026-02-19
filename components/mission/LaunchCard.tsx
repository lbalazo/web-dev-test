import { Launch } from "@/app/types/launch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LaunchCard({ launch }: { launch: Launch }) {
  const {
    success,
    details,
    failures,
    links: { webcast, wikipedia, article },
  } = launch;
  const hasDetails = !!details;
  const hasFailures = failures.length > 0;
  const hasLinks = !!(webcast || wikipedia || article);

  if (!hasDetails && !hasFailures && !hasLinks) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2>Mission Details</h2>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {details && (
          <div
            className={`rounded p-4 border ${
              success
                ? "bg-green-50 border-green-300 text-green-800"
                : "bg-red-50 border-red-300 text-red-800"
            }`}
          >
            <p
              className={`text-sm ${
                success ? "text-green-800" : "text-red-800"
              }`}
            >
              {details}
            </p>
          </div>
        )}
        {failures.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded p-4">
            <h3 className="font-semibold text-red-800 mb-2">Failures</h3>
            {failures.map((f, i) => (
              <p key={i} className="text-sm text-red-800">
                T+{f.time}s {f.altitude ? `@ ${f.altitude}km` : ""} — {f.reason}
              </p>
            ))}
          </div>
        )}
        <div className="flex gap-2 flex-wrap">
          {webcast && (
            <Button asChild>
              <Link href={webcast} target="_blank">
                Watch on YouTube
              </Link>
            </Button>
          )}
          {wikipedia && (
            <Button asChild variant="outline">
              <Link href={wikipedia} target="_blank">
                Wikipedia
              </Link>
            </Button>
          )}
          {article && (
            <Button asChild variant="outline">
              <Link href={article} target="_blank">
                Article
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
