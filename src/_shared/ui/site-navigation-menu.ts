const siteNavigationMenu = `
  <ul>
    <li>
      <a href="/">Index</a>
    </li>
    <li>
        <strong>Patterns</strong>
        <ul>
          <li>
            <strong>Behavioral</strong> <small>- коммуникации между компонентами</small>
          </li>
          <li>
            <strong>Creational</strong> <small>- гибкое создание компонентов</small>
          </li>
          <li>
            <strong>Structural</strong> <small>- зависимости между компонентами</small>
            <ul>
              <li>
                <a href="/proxy">(same interface) Proxy</a> <small>by Proxy object from API</small>
              </li>
              <li>
                <a href="/decorator">(same+ interface) Decorator</a>
              </li>
              <li>
                <a href="/adapter">(other interface) Adapter</a>
              </li>
              <li>
                <a href="/memoization">Memoization</a> <small>by closure idiomatic solution</small>
              </li>
            </ul>
          </li>
        </ul>
    </li>
  </ul>
`;

export { siteNavigationMenu };
