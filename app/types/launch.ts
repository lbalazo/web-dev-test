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
