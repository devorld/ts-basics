import type { Page } from "../../__entities/pages/Page.ts";

type Pages = { [key: string]: Page };

interface Router {
  route: string;
  hash: string;
  pagesPromise: Promise<Pages>;
}

const ROOT_PAGE = 'root';

class Router {
  constructor() {
    this.pagesPromise = import('../../_____pages');
  }

  private getPageID(isSPA = false) {
    const removePrefix = (subUrl: string): string =>
      subUrl.replace(/^#|\//, '') || ROOT_PAGE;

    const route: string = globalThis.window.location.pathname;
    const hash: string = globalThis.window.location.hash;

    return removePrefix(isSPA ? hash : route);
  }

  public async renderPage() {
    const pages = await this.pagesPromise;
    const render = pages[this.getPageID()];

    console.dir(pages);

    render?.();
  }
}

export { Router };
