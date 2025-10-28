function AdapterPage() {
  document.querySelector<HTMLDivElement>('main')!.innerHTML = `
  <div class="adapter">
    adapter
  </div>
`;

//region pattern code
  interface AdvancedConsole {
    print(message: string): void;
  }

  const advancedConsole: AdvancedConsole = Object.assign(Object.create(console), {
    print(message: string) {
      (this as unknown as Console).log(new Date().toISOString().split(/[TZ]/)[1], message);
    },
  });
//endregion

  advancedConsole.print('test adapter');
}

export { AdapterPage };
