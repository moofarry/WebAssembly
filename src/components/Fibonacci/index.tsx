import { useWasm } from 'use-wasm-ts';
// import { computeJS } from '../../utils/Fibonacci';

const PATH_FIBONACCI_C = '../../../examples/c/fibonacci.wasm';

interface Wasm {
  fibonacci: (n: number) => number;
}

const n = 1_000_000;

const Fibonacci: React.FunctionComponent = () => {
  const {
    isLoading,
    fn: { fibonacci }
  } = useWasm<Wasm>(PATH_FIBONACCI_C);

  const computeWasm = (n: number) => {
    const start = performance.now();
    
    const res = fibonacci(n); // fn

    const resultShow = BigInt.asUintN(64, res);
    const time = performance.now() - start;

    return `${resultShow} in ${time}ms`;
  };



  return (
    <>
      <h3>{`Calculando fibonnaci(${n})`}</h3>
      <span> WebAssembly = 
       <span>{isLoading ? '  Loading the fibonnaci WASM file...' : ` ${computeWasm(n)}`}</span> 
      </span>
        // be carefull
       {/* <p>{`JavaScript = ${computeJS(n)}`}</p> */}
    </>
  );
};

export default Fibonacci;
