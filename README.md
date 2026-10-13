# Tanmay — Digital Portfolio

A personal portfolio and project journal built with Next.js. It brings together my background, selected work, and detailed write-ups of the systems I build.

**Live site:** [developer.careerinstitute.co.in](https://developer.careerinstitute.co.in)

## What’s here

- A responsive portfolio with introduction, about, featured work, experience, education, and contact sections.
- Long-form project stories for **Academic ERP** and **AI Proctor**, with screenshots, implementation notes, and custom MDX components.
- A blog index at `/blogs` and individual posts at `/blogs/<post-slug>`.
- Custom visual styling, Bootstrap 5, Inter Variable, and Vercel Analytics and Speed Insights.

## Built with

- Next.js 16 App Router and React 19
- TypeScript
- Bootstrap 5 and custom CSS
- MDX via `next-mdx-remote`, with YAML frontmatter and GitHub-flavored Markdown
- Vercel Analytics and Speed Insights

## Project layout

```text
src/
  app/                    App Router pages, layout, styles, and UI components
    blogs/                Blog index and dynamic article route
    components/           Portfolio sections and shared site components
  content/blog/           MDX articles
  data/portfolio.ts       Portfolio copy, project data, and links
  lib/mdx.ts              Blog post loading and frontmatter parsing
public/images/            Profile, project, blog, and icon assets
```

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server uses Turbopack.

Useful commands:

```bash
npm run lint   # Check the code with ESLint
npm run build  # Create a production build
npm start      # Serve the production build locally
```

## Update portfolio content

Edit `src/data/portfolio.ts` to change the homepage text, featured projects, experience, education, or contact links. Portfolio sections are assembled from this data and the components in `src/app/components/`.

## Write or edit a blog post

Add an `.mdx` file to `src/content/blog/`. Its filename becomes its URL slug: `my-new-post.mdx` is served at `/blogs/my-new-post`.

Every post needs YAML frontmatter with a title, date, and summary:

```mdx
---
title: "A clear article title"
date: "October 14, 2026"
summary: "A short description shown on the blog index and in metadata."
category: "Project systems"
readTime: "6 min read"
heroNote: "A short supporting line for the article header."
sections:
  - "What I built"
  - "What I learned"
tags:
  - TypeScript
  - Next.js
draft: true
---

Write the article here using Markdown and MDX.
```

`category`, `readTime`, `heroNote`, `sections`, `tags`, and `draft` are optional. Set `draft: false` or remove `draft` to publish a post; drafts are excluded from the blog index. The `sections` list supplies the article contents navigation, so keep its entries aligned with the article’s `##` headings.

Posts can use these presentation components:

- `<MetricGrid>` with one or more `<Metric value="..." label="..." note="..." />` items for project highlights.
- `<ProjectShot title="..." src="/images/blogs/your-image.png" caption="..." />` for a screenshot. Store image files in `public/images/blogs/` and reference them from the site root.
- `<Callout title="...">...content...</Callout>` for a highlighted note.

The existing articles in `src/content/blog/` show these components in context.

## Deployment

The site is configured for deployment on Vercel. Connect the repository and deploy with the standard Next.js settings. Use Node.js 20.9 or newer for the build.
