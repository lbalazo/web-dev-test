import { Launch, QueryBody, Rocket } from "@/app/types/launch";

const SPACE_X_API_BASE_URL = process.env.SPACE_X_API_BASE_URL;

if (!SPACE_X_API_BASE_URL) {
  throw new Error("Missing SPACE_X_API_BASE_URL in environment");
}

export async function queryLaunches(queryBody: QueryBody) {
  const res = await fetch(`${SPACE_X_API_BASE_URL}/launches/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(queryBody),
  });

  if (!res.ok) throw new Error("Failed to query launches");
  return res.json();
}

export async function getLaunch(id: string) {
  const res = await fetch(`${SPACE_X_API_BASE_URL}/launches/${id}`);
  if (!res.ok) throw new Error("Failed to fetch launch");
  return res.json();
}

export async function getRocket(id: string) {
  const res = await fetch(`${SPACE_X_API_BASE_URL}/rockets/${id}`);
  if (!res.ok) throw new Error("Failed to fetch rocket");
  return res.json();
}
