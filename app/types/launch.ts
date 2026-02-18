export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean;
  links: {
    patch: { small: string | null };
    webcast: string | null;
  };
}

export interface QueryBody {
  query: Record<string, unknown>;
  options?: {
    sort?: Record<string, "asc" | "desc" | string>;
    limit?: number;
    page?: number;
  };
}
