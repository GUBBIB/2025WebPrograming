# 7주차 수업내용
# 📘 React Hooks & 사용법 정리

## 🔍 Hooks란?

* **Hooks**는 React 16.8부터 도입된 기능으로, \*\*함수형 컴포넌트에서도 상태(state)와 생명주기(lifecycle)\*\*를 관리할 수 있게 해주는 도구입니다.
* 원래는 클래스형 컴포넌트에서만 가능했던 기능들을 함수형에서도 사용할 수 있게 해 줍니다.
* 대표적인 Hook으로는 `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef` 등이 있으며, **커스텀 Hook**을 만들어 로직을 재사용할 수도 있습니다.
* 모든 Hook의 이름은 `use`로 시작해야 하며, **반드시 컴포넌트의 최상위 레벨에서만 호출**해야 합니다.

---

## 🧩 1. useState()

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}
```

* 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해주는 Hook
* `useState(초기값)` 형식으로 사용

### 요약

* 상태 값 선언: `const [state, setState] = useState(초기값)`
* 상태 변경: `setState(새 값)`
* 비동기적 업데이트 특성 존재

---

## 🧩 2. useEffect()

```jsx
import React, { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}
```

* 부수 효과(side effect)를 처리하는 Hook
* 컴포넌트 마운트, 업데이트, 언마운트 시에 특정 로직 실행 가능

### 주요 용도

* API 호출, 타이머, DOM 조작, 구독 등

### 동작 조건

* `useEffect(() => {}, [])` → 마운트 시 1회 실행
* `useEffect(() => {}, [변수])` → 변수 변경 시 실행
* `useEffect(() => { return () => {...}; }, [])` → 언마운트 시 실행

---

## 🧩 3. useMemo()

```jsx
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const expensiveValue = useMemo(() => {
    console.log("계산 중...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += number;
    }
    return result;
  }, [number]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <h2>계산 결과: {expensiveValue}</h2>
    </div>
  );
}
```

* 계산 비용이 큰 작업의 결과를 캐시하여 성능 최적화

### 요약

* `useMemo(() => 계산함수, [의존성])`
* 의존성 값이 변경될 때만 다시 계산

---

## 🧩 4. useCallback()

```jsx
import React, { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("버튼 클릭됨");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

* 동일한 함수를 재사용해 불필요한 렌더링 방지
* 주로 자식 컴포넌트에 콜백 props를 넘길 때 사용

---

## 🧩 5. useRef()

```jsx
import React, { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

* DOM 요소 접근 또는 값 저장 용도
* `.current` 속성을 통해 참조 가능
* 상태와 달리 변경해도 렌더링 발생하지 않음

---

## 🧩 6. Custom Hook (커스텀 훅)

```jsx
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
```

* 반복되는 로직을 하나의 Hook 함수로 정의
* 다른 컴포넌트에서도 재사용 가능

```jsx
import useCounter from "./useCounter";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

---

📌 위 훅들은 모두 리액트의 함수형 컴포넌트 내에서만 사용할 수 있으며, 반드시 최상단에서 호출되어야 합니다. 조건문이나 반복문 내부에서 사용하면 안 됩니다.

<!--
state 도 변수인데 일반 적인 변수가 아니라 값이 바뀌면 화면도 바뀐다.
```python
const [count, setCount] = useState(0);
```
에서 setCount를 사 용해서

- 생명주기 -
마운트(Mount/탄생) = 처음 Dom에 나타날때, 렌더링 될 때
언마운트(UnMount/제거) = Dom에서 사라질 때 

useEffect(setup, dependencies)
setup = 실행할 함수
dependencies = 의존성 배열[특정 값이 변경될 때만 실행]

- useEffet() 는 4가지 선언 방법이 있다.
1. 마운트 시
2. state값 변경시
3. 렌더링 마다
4. 언마운트 시

useMemo()
- 알고리즘에서 메모이제이션과 같은 일을 한다.
useMemo(() => {계산할 함수}, [의존성 배열]);
계산 코드 를 재사요할 때 사용한다.

useCallback()
- 함수 메모이제이션을 제공한다.
function함수를 재사용할 때 사용한다
- 형태는 useMemo()와 비슷하다.

useRef()
- 특정 컴포넌트에 접근할 수 있는 객체를 의미
- 함수형 컴포넌트에서 DOM 요소에 직접 접근하거나, 값이 변경되더라도 리렌더링을 유발
하지 않는 변수를 저장하는 데 사용됩니다.


-->