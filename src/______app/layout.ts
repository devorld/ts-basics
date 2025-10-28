import { Router } from './router/Router.ts';

import loadingSpinner from '../_shared/assets/animations/loading-spinner.gif';

import './index.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<nav>
  <ul>
    <li>
      <a href="/">Index</a>
    </li>
    <li>
        Patterns
        <ul>
          <li>
            Behavioral
          </li>
          <li>
            Creational
          </li>
          <li>
            Structural
            <ul>
              <li>
                <a href="/memoization">Memoization</a>
              </li>
            </ul>
          </li>
        </ul>
    </li>
  </ul>
</nav>
<main>
  <img src="${loadingSpinner}" class="spinner" alt="Loading spinner" />
</main>
`;

const router = new Router();

void router.renderPage();
