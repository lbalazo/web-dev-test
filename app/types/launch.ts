export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean;
  flight_number: number;
  details: string | null;
  rocket: string;
  failures: {
    time: number;
    altitude: number | null;
    reason: string;
  }[];
  links: {
    patch: {
      small: string;
      large: string;
    };
    webcast: string | null;
    youtube_id: string | null;
    wikipedia: string | null;
    article: string | null;
  };
}

export interface Rocket {
  flickr_images: string[];
  name: string;
  type: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
  first_flight: string;
  height: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
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

export interface QueryBody {
  query: Record<string, unknown>;
  options?: {
    sort?: Record<string, "asc" | "desc" | string>;
    limit?: number;
    page?: number;
  };
}
