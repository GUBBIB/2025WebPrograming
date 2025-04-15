// 렌더링 마다 실행
import Counter3 from "./JSXFolder/Counter3"
// stats 값 변경시 마다 실행 
import Counter4 from "./JSXFolder/Counter4"
// 마운트(생성)시에 실행
import Example from "./JSXFolder/Example"
// 언마운트(제거)시에 실행
import Timer from "./JSXFolder/Timer"
// 마운트(생성) 시에 실행
import MouseTracker from "./JSXFolder/MouseTracker"
// 마운트(생성) 시에 실행
import MouseClick from "./JSXFolder/MouseClick"
// 마운트(생성) 시에 실행
import FetchData from "./JSXFolder/FetchData"
// 렌더링 마다, stats 값 변경 마다
import Accommodate from "./JSXFolder/Accommodate"

//
import UseMemo1 from "./JSXFolder/UseMemo1"
import MemoUseCallback from "./JSXFolder/MemoUseCallback"
import TextInputWithFocusButton from "./JSXFolder/TextInputWithFocusButton"

import './App.css';

function App() {
  return (
    <div>
      <Counter3 />
      <hr></hr>
      <Example />
      <hr></hr>
      <Counter4 />
      <hr></hr>
      <Timer />
      <hr></hr>
      <MouseTracker />
      <hr></hr>
      <MouseClick />
      <hr></hr>
      <FetchData />
      <hr></hr>
      <Accommodate />
      <hr></hr>
      <UseMemo1 />
      <hr></hr>
      <MemoUseCallback />
      <hr></hr>
      <TextInputWithFocusButton />
    </div>
  );
}

export default App;
