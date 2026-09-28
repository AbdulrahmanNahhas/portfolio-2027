# /public/uses

Drop item logos here, then reference them from `lib/data.ts`:

```ts
{
  name: "Ladybird",
  tag: "Browser",
  description: "…",
  url: "https://ladybird.org",
  image: "/uses/ladybird.png",   // ← this path
}
```

`image` is optional. Without it, a cobalt letter monogram is shown automatically.

Recommended: square or 4:3 images, ~480px wide, PNG or WebP.
