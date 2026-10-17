import settings from "@/content/settings.json";

// One active language for now; content already lives in a separate English edition.
export const defaultLocale = settings.locale;
export const textDirectionByLocale: Record<string, "ltr" | "rtl"> = {
  [defaultLocale]: settings.textDirection === "rtl" ? "rtl" : "ltr",
};
