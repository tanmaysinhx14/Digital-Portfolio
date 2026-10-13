import fs from 'fs';
import path from 'path';
import { parse } from 'yaml';

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  category?: string;
  readTime?: string;
  heroNote?: string;
  sections?: string[];
  tags?: string[];
  draft?: boolean;
};

export const headingSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const parsePostFile = (fileContent: string, slug: string) => {
  const normalizedContent = fileContent.replace(/^\uFEFF/, '');
  const match = normalizedContent.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/);
  if (!match) {
    throw new Error(`Missing YAML frontmatter in blog post: ${slug}`);
  }

  const parsed = parse(match[1]) as Partial<PostMeta> | null;
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`Invalid YAML frontmatter in blog post: ${slug}`);
  }
  if (typeof parsed.title !== 'string' || typeof parsed.date !== 'string' || typeof parsed.summary !== 'string') {
    throw new Error(`Blog post frontmatter requires title, date, and summary: ${slug}`);
  }

  return {
    meta: { ...parsed, slug } as PostMeta,
    content: normalizedContent.slice(match[0].length),
  };
};

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(realSlug)) {
    throw new Error(`Invalid blog post slug: ${slug}`);
  }

  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return parsePostFile(fileContent, realSlug);
};

export const getAllPostsMeta = (): PostMeta[] => {
  if (!fs.existsSync(rootDirectory)) return [];
  
  const files = fs.readdirSync(rootDirectory);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((fileName) => getPostBySlug(fileName).meta)
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  return posts;
};
