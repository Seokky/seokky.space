const articles = {
  1: import('@/articles/article1.md'),
} as { [name: number]: Promise<any> };

async function get(name: number) {
  const article = await articles[name];
  return article?.default;
}

export default { get };
