# Urine Color Guide

This repository contains the published static build of **Urine Color Guide**, an educational, bilingual reference for observing common urine-color changes in their wider health context. The content is designed to clarify patterns and safety signals; it is **not** a substitute for individual medical advice, diagnosis, or treatment.

The site is published through GitHub Pages from the repository root. The full React/Vite source is retained under [`source/`](./source/) so that the published output and development implementation remain traceable.

## What changed

The current release introduces an English-first experience with an Arabic RTL language switch, distinct editorial images for each kidney and urinary-health article, contextual related-reading cards, responsive layouts, structured data, multilingual alternate links, `robots.txt`, and an expanded XML sitemap. The visual system is based on a calm laboratory aesthetic: warm paper, clinical navy, aqueous mint, and a flowing color-spectrum thread that links observations with safety context.

## Local development

Use the source folder to run the development site.

```bash
cd source
pnpm install
pnpm dev
```

To create the GitHub Pages build, run the following command from `source/`. The build must use the repository base path so asset and route URLs resolve correctly under `https://imadtbn.github.io/urine-color-guide/`.

```bash
GITHUB_PAGES=true pnpm build
```

## Editorial sources

The website links to reputable public health sources, including [Mayo Clinic](https://www.mayoclinic.org/diseases-conditions/urine-color/symptoms-causes/syc-20367333), [MedlinePlus](https://medlineplus.gov/lab-tests/blood-in-urine/), the [National Kidney Foundation](https://www.kidney.org/), and the relevant hydration research indexed in [PubMed](https://pubmed.ncbi.nlm.nih.gov/16552947/).
