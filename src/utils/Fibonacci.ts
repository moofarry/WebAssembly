export const computeJS = (n: number) => {
  const start = performance.now();
  if (n === 0) {
    return performance.now() - start;
  }

  if (n === 1) {
    return performance.now() - start;
  }

  let a = 0n;
  let b = 1n;
  let c: bigint;

  for (let i = 2n; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return `${BigInt.asUintN(64, b)} in ${performance.now() - start}ms`;
};
