export default class ArticleParser {
  #html = '';

  constructor(articleHTML: string) {
    this.#html = articleHTML;
  }

  private getHeader() {
    return this.#html
      .split('</header>')[0]
      .replace('<header>', '')
      .slice(0, -1);
  }

  getMeta() {
    const metaItemRegex = /<\w+>([А-Яа-я]|\s|\w|\d|\.|-|—)+<\/\w+>/g;
    const metaItemTextRegex = /([А-Яа-я]|\s|\w|\d|\.|-|—)+/g;
    const metaItems = this.getHeader()
      .match(metaItemRegex) // pure meta items
      ?.map((item: any) => item.match(metaItemTextRegex)[1]); // meta items text only

    if (!metaItems || metaItems.length !== 4) {
      throw new Error('Invalid article header');
    }

    const [title, description, date, author] = metaItems;

    return {
      title,
      description,
      date,
      author,
    };
  }

  getBody() {
    return this.#html.split('</header>')[1];
  }

  /* eslint-disable class-methods-use-this */
  getImages() {
    const images = document.getElementsByClassName('article__image');
    return Array.from(images) as HTMLElement[];
  }
  /* eslint-enable class-methods-use-this */
}
