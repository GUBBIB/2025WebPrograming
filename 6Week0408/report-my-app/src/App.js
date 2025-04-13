import './App.css';

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li><Link to="/">홈</Link></li>
            <li><Link to="/cnn">CNN</Link></li>
            <li><Link to="/activation">활성화 함수</Link></li>
            <li><Link to="/compile">Model Compile</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cnn" element={<CNNPage />} />
          <Route path="/activation" element={<ActivationPage />} />
          <Route path="/compile" element={<CompilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">머신러닝 학습 페이지에 오신 것을 환영합니다!</h1>
      <p>React로 만든 이 페이지는 CNN, 활성화 함수, 모델 컴파일에 대해 배울 수 있도록 구성되어 있습니다.</p>
    </div>
  );
}

function CNNPage() {
  const [layerCount, setLayerCount] = useState(2);
  const [kernelSize, setKernelSize] = useState(3);
  const [usePooling, setUsePooling] = useState(true);

  return (
    <div>
      <h2 className="text-xl font-semibold">합성곱 신경망(CNN)</h2>
      <p className="my-2">CNN은 이미지 처리에 강력한 딥러닝 구조입니다.</p>
      <p>레이어 수: {layerCount}, 커널 크기: {kernelSize}, 풀링 사용: {usePooling ? "예" : "아니오"}</p>
      <button onClick={() => setLayerCount(layerCount + 1)} className="mr-2 p-2 bg-blue-200 rounded">레이어 추가</button>
      <button onClick={() => setKernelSize(kernelSize + 1)} className="mr-2 p-2 bg-green-200 rounded">커널 크기 증가</button>
      <button onClick={() => setUsePooling(!usePooling)} className="p-2 bg-yellow-200 rounded">풀링 토글</button>
    </div>
  );
}

function ActivationPage() {
  const [selectedFunc, setSelectedFunc] = useState("ReLU");
  const [inputVal, setInputVal] = useState(1);
  const [result, setResult] = useState(null);

  const calculate = () => {
    let res = 0;
    switch (selectedFunc) {
      case "ReLU":
        res = Math.max(0, inputVal);
        break;
      case "Sigmoid":
        res = 1 / (1 + Math.exp(-inputVal));
        break;
      case "Tanh":
        res = Math.tanh(inputVal);
        break;
      default:
        res = inputVal;
    }
    setResult(res);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">활성화 함수</h2>
      <p>입력 값을 기반으로 활성화 함수 출력을 계산합니다.</p>
      <select value={selectedFunc} onChange={(e) => setSelectedFunc(e.target.value)} className="mr-2 p-2">
        <option value="ReLU">ReLU</option>
        <option value="Sigmoid">Sigmoid</option>
        <option value="Tanh">Tanh</option>
      </select>
      <input type="number" value={inputVal} onChange={(e) => setInputVal(parseFloat(e.target.value))} className="mr-2 p-2"/>
      <button onClick={calculate} className="p-2 bg-purple-200 rounded">계산</button>
      {result !== null && <p className="mt-2">결과: {result}</p>}
    </div>
  );
}

function CompilePage() {
  const [optimizer, setOptimizer] = useState("adam");
  const [loss, setLoss] = useState("categorical_crossentropy");
  const [metrics, setMetrics] = useState(["accuracy"]);

  return (
    <div>
      <h2 className="text-xl font-semibold">모델 컴파일 옵션</h2>
      <div className="my-2">
        <label className="mr-2">옵티마이저:</label>
        <select value={optimizer} onChange={(e) => setOptimizer(e.target.value)}>
          <option value="adam">adam</option>
          <option value="sgd">sgd</option>
          <option value="rmsprop">rmsprop</option>
        </select>
      </div>
      <div className="my-2">
        <label className="mr-2">손실 함수:</label>
        <input type="text" value={loss} onChange={(e) => setLoss(e.target.value)} className="p-1"/>
      </div>
      <div className="my-2">
        <label className="mr-2">지표(metrics):</label>
        <input type="text" value={metrics.join(", ")} onChange={(e) => setMetrics(e.target.value.split(",").map(m => m.trim()))} className="p-1"/>
      </div>
      <div className="mt-4 p-2 bg-gray-100 rounded">
        <h3 className="font-semibold">모델 컴파일 설정</h3>
        <p>optimizer: {optimizer}</p>
        <p>loss: {loss}</p>
        <p>metrics: {metrics.join(", ")}</p>
      </div>
    </div>
  );
}

export default App;
