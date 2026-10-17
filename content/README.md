# Editing Nahhas’s website

All personal content lives here. English is the only active language. No language switcher, translated routes, or translation runtime has been added.

## Where to edit

| File                 | What it controls                                                                                                                             |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `en/profile.json`    | Name, display name, location, biography, birth date, contact/social links, site metadata                                                     |
| `en/about.json`      | About paragraphs, interests, personal facts, and principles                                                                                  |
| `en/learning.json`   | Homepage “currently exploring” cards, learning categories, languages, and next interests                                                     |
| `en/projects.json`   | Project shelf: descriptions, tags, display timeline, artwork, and optional links                                                             |
| `en/journey.json`    | Earlier roles and volunteering. `period` is a display label, so unknown dates need not be invented                                           |
| `en/tools.json`      | Everyday tools, projects being watched, and the workbench                                                                                    |
| `en/notes.json`      | Notes, including full article text, publication dates, and stable URL slugs                                                                  |
| `en/navigation.json` | Main navigation and additional footer/mobile destinations                                                                                    |
| `en/contact.json`    | Email, contact topics, and the email draft greeting                                                                                          |
| `en/ui.json`         | Page titles, introductions, metadata descriptions, buttons, labels, accessibility text, and illustration captions, grouped by page/component |
| `settings.json`      | Active English edition, text direction, and date-formatting locale                                                                           |

`lib/data.ts` and `lib/content.ts` expose these files to the components. They contain no biography or project records. Visual layout, interaction, and styling remain in React/CSS.

## Add or edit a project

Copy an entry in `en/projects.json` and give it a unique, stable `id`. Set `featured` to `true` to include it on the homepage (the first three featured records are shown).

- `group` is a stable machine value, separate from the translated `category` label. The currently displayed filters are configured in `ui.json` → `projectShelf.filters`.
- `art`: `0` = browser, `1` = embedded board, `2` = community note, `3` = Arabic-language illustration.
- `status`: `in-progress`, `completed`, or `archived`. Change display labels under `ui.json` → `projectCard.statuses`.
- `year` is display text: a real year, “Ongoing,” or “Earlier project” all work.
- Add `link` or `github` only when you have a real destination. Omit unavailable links.
- Keep IDs and note slugs stable when changing titles. They identify records, rather than carrying translated text.

## Edit a note

Articles support paragraphs, `## headings`, `- bullet lists`, numbered lists, and `**bold text**`. JSON represents line breaks as `\n`. Use `YYYY-MM-DD` for publication dates. The existing four notes were retained from the preceding website; review their copy, dates, and reading times as you update them.

## Small text with variables

UI messages use placeholders such as `{count}`, `{name}`, `{title}`, and `{email}`. Preserve these placeholders when rewriting the sentence; you can move them within it. The site renders them as plain text.

The homepage headline has separate lead/prefix/accent/suffix fields to support its highlighted lettering. The desk code example is editable under `ui.json` → `desk`.

## Validation

Run `pnpm content:check` after editing. It checks required fields, enum values, unique IDs, note dates, internal navigation links, project filters, and references to UI copy. `pnpm build` runs this check automatically, then builds and type-checks the site.

## Later translations

The English directory forms one complete content edition. A future Arabic edition can mirror its files and UI keys, retaining record IDs, statuses, artwork values, and slugs while translating display text. Then a locale-aware loader and routing can choose the edition and text direction. Merely adding an `ar/` directory or changing `settings.json` does not implement that behavior.

## The previous content

`archive/previous-content.json` preserves the earlier dataset before this revision. It is never imported by the live site. It contains superseded role descriptions and generic showcase claims; it is a reference, not a source of current facts. The active journey uses the background supplied for this revision, without inferring which old roles remain current or inventing their dates. Older tool recommendations have not been added as current tools automatically.
