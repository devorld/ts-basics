function DecoratorPage() {
  document.querySelector<HTMLDivElement>('main')!.innerHTML = `
  <div class="decorator">
    decorator
  </div>
`;

//region pattern code

  /**
   * same or with adds (interface)
   */
  interface DecoratedConsole extends Console {
    print(message: string): void;
  }

  const decoratedConsole: DecoratedConsole = Object.assign(Object.create(console), {
    print(message: string) {
      (this as unknown as Console).log(new Date().toISOString().split(/[TZ]/)[1], message);
    },
  });
//endregion

  decoratedConsole.log('test decorator - old');
  decoratedConsole.print('test decorator - added');
}

export { DecoratorPage };
