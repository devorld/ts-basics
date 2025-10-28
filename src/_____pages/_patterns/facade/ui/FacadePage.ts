function FacadePage() {
  document.querySelector<HTMLDivElement>('main')!.innerHTML = `
  <div class="facade">
    facade
  </div>
`;

//region pattern code

  /**
   * new (interface) above over big complexity
   */
  interface FacadedConsole {
    print(...args: unknown[]): void;
  }

  const facadedConsole: FacadedConsole = Object.assign(Object.create(null), {
    print(...args: unknown[]) {
      const argsCount = (args || []).length;

      switch (true) {
        case (argsCount === 1):
          const value = args[0];

          if (typeof value === 'object' && value !== null) {
            globalThis.console.dir(value);
          } else {
            globalThis.console.log(new Date().toISOString().split(/[TZ]/)[1], value);
          }

          break;
        case (argsCount > 1):
          globalThis.console.log(new Date().toISOString().split(/[TZ]/)[1], ...args);
          break;
        case argsCount === 0:
          globalThis.console.log(new Date().toISOString().split(/[TZ]/)[1]);
      }

    },
  });
//endregion

  facadedConsole.print();
  facadedConsole.print('test facade - new basic over old complexity');
  facadedConsole.print(facadedConsole);
  facadedConsole.print(0, 1, 2, 3);
}

export { FacadePage };
