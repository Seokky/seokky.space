export default class ArticleParser {
  #html = '';

  constructor(articleHTML: string) {
    this.#html = articleHTML;
  }

  private getHeader() {
    return this.#html
      .split('</header>')[0]
      .replace('<header ', '')
      .slice(0, -1);
  }

  getMeta() {
    const header = this.getHeader();
    const metaItems = header.match(/\w+="(\w|\d|\s|[А-Яа-я]|\.)+"/g);

    if (!metaItems || metaItems.length !== 3) {
      throw new Error('Invalid article header');
    }

    const [rawTitle, rawDate, rawAuthor] = metaItems;

    const matchRe = /".+"/;
    const replpaceRe = /"/g;

    const title = rawTitle.match(matchRe)![0].replace(replpaceRe, '');
    const date = rawDate.match(matchRe)![0].replace(replpaceRe, '');
    const author = rawAuthor.match(matchRe)![0].replace(replpaceRe, '');

    return { title, date, author };
  }

  getBody() {
    return this.#html.split('</header>')[1];
  }

  /* eslint-disable class-methods-use-this */
  getImages() {
    return Array.from(
      document.getElementsByClassName('article__image'),
    );
  }
  /* eslint-enable class-methods-use-this */
}
