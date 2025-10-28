export function createMemoization<T>(
  initialValue: T,
  changeValue: (value: T) => object | number | string,
) {
  // noinspection UnnecessaryLocalVariableJS
  let valueStorage: T = initialValue;

  return changeValue.bind(null, valueStorage);
}
