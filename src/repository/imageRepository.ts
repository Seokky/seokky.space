import afpStructureOriginal from '@/assets/img/article-images/afp-structure.png';
import afpStructureWebp from '@/assets/img/article-images/afp-structure.webp';
import afpResultOriginal from '@/assets/img/article-images/afp-result.png';
import afpResultWebp from '@/assets/img/article-images/afp-result.webp';
import pistachioOriginal from '@/assets/img/article-images/pistachio.png';
import pistachioWebp from '@/assets/img/article-images/pistachio.webp';
import logoOriginal from '@/assets/img/article-images/logo.png';
import logoWebp from '@/assets/img/article-images/logo.webp';
import bgOriginal from '@/assets/img/article-images/bg.jpg';
import bgWebp from '@/assets/img/article-images/bg.webp';

const images = {
  afpResult: {
    original: afpResultOriginal,
    webp: afpResultWebp,
  },
  afpStructure: {
    original: afpStructureOriginal,
    webp: afpStructureWebp,
  },
  pistachio: {
    original: pistachioOriginal,
    webp: pistachioWebp,
  },
  logo: {
    original: logoOriginal,
    webp: logoWebp,
  },
  bg: {
    original: bgOriginal,
    webp: bgWebp,
  },
} as { [name: string]: { original: any; webp: any } };

const get = (name: string) => {
  const img = images[name] || {};

  if (!img.original) {
    throw new Error(`Invalid article image name: ${name}`);
  }

  return img;
};

export default { get };
