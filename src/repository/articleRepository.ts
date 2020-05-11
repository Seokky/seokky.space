import ArticleParser from '@/classes/ArticleParser';

const articles = {
  1: import('@/articles/article1.md'),
  2: import('@/articles/article2.md'),
  3: import('@/articles/article3.md'),
} as { [name: number]: Promise<any> };

async function get(name: number | string) {
  const article = await articles[name as number];
  return article?.default;
}

async function getAll() {
  const names = Object.keys(articles);

  return Promise.all(
    names.map(async (name: string) => {
      const article = await get(name);
      const articleParser = new ArticleParser(article);

      return {
        ...articleParser.getMeta(),
        id: name,
      };
    }),
  );
}

export default { get, getAll };
