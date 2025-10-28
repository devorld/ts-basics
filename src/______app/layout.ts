import { Router } from './router/Router.ts';

import {siteNavigationMenu} from '../_shared/ui/site-navigation-menu.ts';
import loadingSpinner from '../_shared/assets/animations/loading-spinner.gif';

import './index.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<nav>${siteNavigationMenu}</nav>
<main>
  <img src="${loadingSpinner}" class="spinner" alt="Loading spinner" />
</main>
`;

const router = new Router();

void router.renderPage();
