const SPACE_X_API_BASE_URL = process.env.SPACE_X_API_BASE_URL;

export async function getLaunches() {
  const res = await fetch(`${SPACE_X_API_BASE_URL}/launches`);

  if (!res.ok) throw new Error("Failed to fetch launches");
  return res.json();
}
