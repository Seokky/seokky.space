import ArticleParser from '@/classes/ArticleParser';
import { idsBySlug, slugsById } from '@/articles/slugsHelper';
import { ArticleMetaExtended } from '@/types/ArticleMetaExtended';

const articles = {
  1: import('@/articles/article1.md'),
  2: import('@/articles/article2.md'),
  3: import('@/articles/article3.md'),
} as { [name: number]: Promise<any> };

async function get(slug: string) {
  const id = idsBySlug[slug];
  const article = await articles[id];

  return article?.default;
}

async function getAll(): Promise<ArticleMetaExtended[]> {
  const ids = Object.keys(articles);

  return Promise.all(
    ids.map(async (id: string) => {
      const slug = slugsById[+id];
      const article = await get(slug);
      const articleParser = new ArticleParser(article);

      return {
        ...articleParser.getMeta(),
        id,
        slug,
      };
    }),
  );
}

export default { get, getAll };
