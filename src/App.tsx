import reactLogo from './assets/react.svg';
import webAssemblyLogo from './assets/webassembly.svg';
import './App.css';

import Fibonacci from './components/Fibonacci';

function App() {
  return (
    <>
      <div style={{textAlign:'center'}}>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={webAssemblyLogo} className="logo react" alt="React logo" />
      </div>
      <h1>React + WebAssembly</h1>

       <Fibonacci/> 

    </>
  );
}

export default App;
