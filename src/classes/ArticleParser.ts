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
    const header = this.getHeader();
    const metaItems = header
      .match(/<\w+>([А-Яа-я]|\s|\w|\d|\.|-|—)+<\/\w+>/g)
      ?.map((item: any) => item.match(/([А-Яа-я]|\s|\w|\d|\.|-|—)+/g)[1]);

    if (!metaItems || metaItems.length !== 4) {
      throw new Error('Invalid article header');
    }

    const [title, description, date, author] = metaItems;

    return {
      title, description, date, author,
    };
  }

  getBody() {
    return this.#html.split('</header>')[1];
  }

  /* eslint-disable class-methods-use-this */
  getImages() {
    return Array.from(
      document.getElementsByClassName('article__image'),
    ) as HTMLElement[];
  }
  /* eslint-enable class-methods-use-this */
}
