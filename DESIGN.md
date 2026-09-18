# Design — Disk Help

Built world for `site/index.html`, derived from the company flyer (`image.png`).

## Color (Committed: brand green owns whole regions)

| Token | Value | Role |
|---|---|---|
| `--green-800` | `#0f5323` | Hero and closing fields |
| `--green-700` | `#146b2e` | Primary brand, icon badges, selected state |
| `--green-950` | `#08291a` | Footer |
| `--green-50` / `--green-100` / `--green-200` | `#f1f8f2` / `#dcefe0` / `#bfe0c7` | Pale grounds, rules, secondary text on green |
| `--red-600` / `--red-700` | `#d3211b` / `#b21a15` | The one action (WhatsApp), swoosh, wrench, stamp |
| `--ink` / `--ink-soft` | `#10261a` / `#3b5545` | Text on light grounds |

Red is reserved for action and brand marks; never for decoration or body text.

## Type

Archivo (Google Fonts, variable width + weight) only.
- Shout: 900, `font-stretch` 112–118%, tracking −0.03 to −0.04em (`DÁ UM HELP`, section titles, `1998`).
- Setup line: italic 700, normal width (`Se tem um problema,`, `Deu problema?`), echoing the flyer.
- UI and body: 600–800 labels, 400 body at 1.0625rem / 1.55.

## Components

- **Ticket (chamado):** white card on green, dashed perforation with side notches, rotated red `HELP` stamp. Holds service chips, bairro/nome inputs, a 3-option segmented control, a WhatsApp-style bubble preview, and the red send button.
- **Chips:** pill with a 30px green icon disc; pressed = solid green, icon disc inverts.
- **Service index:** category name left, rows of 54px green badges (double inset ring, from the flyer) + name + `Adicionar` pill. Rows toggle the same state as chips.
- **Icons:** authored 24px SVG sprite, 1.75 stroke, round caps/joins. WhatsApp mark is filled.
- **Buttons:** 12px radius, 52px min height; red primary, white-outline ghost on green.

## Motion

Ease `cubic-bezier(0.23, 1, 0.32, 1)`. Press feedback scale 0.97 at 120ms; color changes 160ms; bubble content fades 0.55→1 at 180ms on each change; floating WhatsApp button enters 240ms when the hero leaves the viewport. Hover motion gated to fine pointers; reduced motion removes transforms and smooth scroll.

## Layout

Max width 1200px, gutter `clamp(16px, 4vw, 40px)`. Sections alternate white / `--green-50` / green fields, with 72–128px block padding. Single column below 960px.
