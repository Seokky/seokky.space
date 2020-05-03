const images = {
  pistachio: import('@/assets/pistachio.png'),
  logo: import('@/assets/logo.png'),
} as { [name: string]: Promise<any> };

async function get(name: string): Promise<string> {
  const image = await images[name];

  return image ? image.default : '';
}

export default { get };
