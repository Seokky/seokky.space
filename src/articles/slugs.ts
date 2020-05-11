export const slugsById = {
  1: 'kak-python-frontenderu-v-bytu-prigodilsya',
  2: 'pishem-zmeyku-na-vuejs-bez-canvas',
  3: 'serverless-kogda-len-pisat-bekend',
} as { [id: number]: string };

export const idsBySlug = {} as {
  [slug: string]: number;
};

/* filling idsBySlug object */
const ids = Object.keys(slugsById);
ids.forEach((id: string) => {
  const itemSlug = slugsById[+id];
  idsBySlug[itemSlug] = +id;
});
