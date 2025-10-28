function ProxyPage() {
  document.querySelector<HTMLDivElement>('main')!.innerHTML = `
  <div class="proxy">
    proxy
  </div>
`;

//region pattern code

  /**
   * old (interface)
   */
  const console: Console = new globalThis.Proxy(globalThis.console, {
    get(target, prop, receiver) {
      if (typeof prop === "string" && ['log', 'warn'].includes(prop)) {
        return target.log.bind(receiver, new Date().toISOString().split(/[TZ]/)[1]);
      }
    },
  });
  console.log('test proxy - old interface and with changes in functionality');

//endregion
}

export { ProxyPage };
