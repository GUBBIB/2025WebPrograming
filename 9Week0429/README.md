# 9주차 수업내용
# React 이벤트 핸들링 및 조건부 렌더링 정리

## 📌 1. 이벤트 핸들링(Event Handling)

### ✅ 기본 문법

* React에서는 HTML 이벤트와 유사하지만 camelCase를 사용함
* JSX 안에서 함수는 중괄호로 감싸서 전달

```jsx
<button onClick={handleClick}>클릭</button>
```

### ✅ 이벤트 핸들러 함수 작성

* 함수는 컴포넌트 내부 또는 외부에서 선언 가능

```jsx
function handleClick() {
  console.log("버튼이 클릭되었습니다.");
}
```

### ✅ 상태(state)와 함께 사용

```jsx
import React, { useState } from "react";

function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prev) => !prev);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}
```

---

## 📌 2. 조건부 렌더링(Conditional Rendering)

### ✅ JSX에서 조건 처리 방법

#### 1. 삼항 연산자 ( ? : )

```jsx
const isLoggedIn = true;
const greeting = isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인 해주세요.</h1>;
```

#### 2. 논리 연산자 &&

```jsx
const isLoggedIn = true;
return (
  <div>
    {isLoggedIn && <p>로그인 상태입니다.</p>}
  </div>
);
```

#### 3. 논리 연산자 ||

```jsx
let username = inputName || "Guest";
```

#### 4. if 문을 사용하는 함수

```jsx
function renderContent() {
  if (isLoggedIn) {
    return <h1>환영합니다!</h1>;
  } else {
    return <h1>로그인 해주세요.</h1>;
  }
}
```

#### 5. 즉시 실행 함수 표현식 (IIFE)

```jsx
return (
  <div>
    {(() => {
      if (!user) return <p>사용자 정보가 없습니다.</p>;
      return <p>안녕하세요, {user.name}</p>;
    })()}
  </div>
);
```

#### 6. switch 문

```jsx
switch (status) {
  case "success": return <p>성공했습니다!</p>;
  case "error": return <p>에러가 발생했습니다.</p>;
  case "loading": return <p>로딩 중입니다...</p>;
  default: return <p>상태를 알 수 없습니다.</p>;
}
```

---

## 📌 3. Truthy와 Falsy

### ✅ JavaScript에서 Truthy/Falsy 개념

* Falsy 값: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`
* 그 외 모든 값은 Truthy

### ✅ 예시

```js
if (0) console.log("실행 안 됨");
if ("hello") console.log("실행됨");
```

---

## 📌 4. 실습 예제

### ✅ 로그인 상태에 따라 버튼 및 문구 출력

```jsx
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>{isLoggedIn ? '환영합니다!' : '로그인 해주세요.'}</h1>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}
```

---

## ✅ 마무리 정리

| 방법          | 설명                 |        |             |
| ----------- | ------------------ | ------ | ----------- |
| `if`문       | 함수 내부 조건 처리에 적합    |        |             |
| `&&` 연산자    | 조건이 참일 때만 렌더링      |        |             |
| `? :` 삼항연산자 | 간결하게 참/거짓 분기       |        |             |
| \`          |                    | \` 연산자 | 기본값 설정 시 사용 |
| `IIFE`      | 복잡한 조건 처리 시 유용     |        |             |
| `switch`    | 여러 조건 중 하나 선택 시 적합 |        |             |

---

이상으로 React의 이벤트 핸들링과 조건부 렌더링의 기본 문법 및 예제를 정리하였습니다.

<!--
07React_EventHandler.pdf
08React_ConditionalRendering.pdf
-->