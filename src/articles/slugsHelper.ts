import slugs from './slugs.json';

export const slugsById = slugs as { [id: number]: string };
export const idsBySlug = {} as { [slug: string]: number };

/* filling idsBySlug object */
const ids = Object.keys(slugsById);
ids.forEach((id: string) => {
  const itemSlug = slugsById[+id];
  idsBySlug[itemSlug] = +id;
});
