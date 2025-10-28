import { createMemoization } from '../../../__entities/patterns/structural/Memoization/memoizator.ts';

import type { Counter } from '../../../__entities/storages/Counter.ts';

import './styles.css';

function MemoizationPage() {
  document.querySelector<HTMLDivElement>('main')!.innerHTML = `
  <div class="card">
    <button id="counter" type="button">count is ?</button>
  </div>
`;

//region memoization
  const buttonCounter = document.querySelector<HTMLButtonElement>('#counter')!;

  const modificator = createMemoization<Counter>({counter: 0}, (storage) => ++storage.counter);

  buttonCounter.addEventListener('click', () => {
    buttonCounter.innerHTML = `count is ${modificator()}`
  });
//endregion
}

export { MemoizationPage };
