function AdapterPage() {
  document.querySelector<HTMLDivElement>('main')!.innerHTML = `
  <div class="adapter">
    adapter
  </div>
`;

//region pattern code

  /**
   * new (interface)
   */
  interface AdaptedConsole {
    print(message: string): void;
  }

  const adaptedConsole: AdaptedConsole = {
    print(message: string) {
      globalThis.console.log(new Date().toISOString().split(/[TZ]/)[1], message);
    },
  };
//endregion

  adaptedConsole.print('test adapter - new');
}

export { AdapterPage };
