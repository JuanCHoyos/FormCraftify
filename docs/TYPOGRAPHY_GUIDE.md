
# Responsive Typography Guide - Tailwind

This guide defines a semantic and responsive typographic scale using Tailwind classes.
Each heading, subtitle, and text size adjusts automatically for mobile, tablet, and desktop while keeping hierarchy consistent.

---

## 1. Semantic Typography Scale (Responsive)

| Element     | Mobile    | Tablet    | Desktop   | Weight        | Tailwind Classes                                   |
| ----------- | --------- | --------- | --------- | ------------- | -------------------------------------------------- |
| h1          | text-4xl  | text-5xl  | text-6xl  | font-bold     | `text-4xl md:text-5xl lg:text-6xl font-bold`     |
| h2          | text-3xl  | text-4xl  | text-5xl  | font-semibold | `text-3xl md:text-4xl lg:text-5xl font-semibold` |
| h3          | text-2xl  | text-3xl  | text-4xl  | font-medium   | `text-2xl md:text-3xl lg:text-4xl font-medium`   |
| h4          | text-xl   | text-2xl  | text-3xl  | font-medium   | `text-xl md:text-2xl lg:text-3xl font-medium`    |
| h5          | text-lg   | text-xl   | text-2xl  | font-medium   | `text-lg md:text-xl lg:text-2xl font-medium`     |
| h6          | text-base | text-lg   | text-xl   | font-medium   | `text-base md:text-lg lg:text-xl font-medium`    |
| Subtitle    | text-base | text-lg   | text-xl   | font-medium   | `text-base md:text-lg lg:text-xl font-medium`    |
| Base (p)    | text-sm   | text-base | text-base | font-normal   | `text-sm md:text-base font-normal`               |
| Small       | text-xs   | text-sm   | text-sm   | font-normal   | `text-xs md:text-sm font-normal`                 |
| Extra Small | text-xs   | text-xs   | text-xs   | font-normal   | `text-xs font-normal`                            |

---

## 2. Font Weight

- **Light:** `font-light` → secondary or less important text
- **Normal:** `font-normal` → base text and paragraphs
- **Medium:** `font-medium` → subtitles or highlighted elements
- **Semibold:** `font-semibold` → secondary headings
- **Bold:** `font-bold` → main headings and call-to-actions

---
