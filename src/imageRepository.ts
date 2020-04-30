const images = {
  pistachio: import('@/assets/pistachio.png'),
  logo: import('@/assets/logo.png'),
} as { [name in ImageName]: Promise<any> };

async function get(name: ImageName) {
  const image = await images[name];
  return image.default;
}

type ImageName = 'pistachio' | 'logo';

export default { get };
