import content from "@/content/en/ui.json";

// English is the only active edition. Locale routing can select another folder later.
export const copy = content;
export function message(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    String(values[key] ?? match),
  );
}
