import './styles.css';

import viteLogo from '/assets/icons/vite.svg';
import typescriptLogo from '../../../_shared/assets/icons/typescript.svg';

function RootPage() {
  document.querySelector<HTMLDivElement>('main')!.innerHTML = `
  <a href="https://vite.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
  <h1>Vite + TypeScript</h1>
  <p class="read-the-docs">
    Click on the Vite and TypeScript logos to learn more
  </p>
`;
}

export { RootPage };
