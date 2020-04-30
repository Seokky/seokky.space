const articles = {
  1: import('@/articles/article1.json'),
} as { [name: number]: Promise<any> };

async function get(name: number) {
  const image = await articles[name];
  return image?.default;
}

export default { get };
