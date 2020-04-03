import React from 'react';
import UseEffect from './components/UseEffect';
import Server from './components/Server';
import ServerCustomHook from './components/ServerCustomHook';
import UseReducer from './components/UseReducer';
import Counter from './use-callback/Counter';
import CounterPerf from './use-callback/CounterPerf';
import Family from './use-callback/Family';
import TextInputWithFocusButton from './use-ref/TextInputWithFocusButton'
import Timer from './use-ref/Timer'

function App() {
  return (
    <div className="App">
      {/* <UseEffect /> */}
      {/* <Server /> */}
      {/* <ServerCustomHook /> */}
      {/* <UseReducer /> */}
      {/* <Counter /> */}
      {/* <CounterPerf /> */}
      {/* <Family /> */}
      {/* <TextInputWithFocusButton /> */}
      <Timer />
    </div>
  );
}

export default App;
