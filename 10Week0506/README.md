# 10주차 수업내용

# 📘 React 이벤트 핸들링 & 조건부 렌더링 정리

## 📌 Event Handling (이벤트 핸들링)

### ✅ 이벤트와 이벤트 핸들러

* **Event**: 사용자 인터페이스에서 발생하는 사건 (ex. 클릭, 입력)
* **Event Handler**: 이벤트 발생 시 실행되는 함수 (리액트에서는 이벤트 리스너 역할)

### ✅ React vs DOM 이벤트 비교

| 항목     | DOM 이벤트                   | React 이벤트                       |
| ------ | ------------------------- | ------------------------------- |
| 등록 방식  | addEventListener          | JSX에서 onEvent 속성 사용 (onClick 등) |
| 제거 방식  | removeEventListener 수동 설정 | 자동 (언마운트 시 제거됨)                 |
| 이벤트 객체 | Event (MouseEvent 등)      | SyntheticEvent (React 래핑 객체)    |
| 이벤트 위임 | 직접 설정                     | 자동 (document 레벨 위임)             |
| 네이밍    | 소문자 (click)               | 카멜케이스 (onClick)                 |

### ✅ 기본 사용법

```jsx
function ButtonComponent() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
```

### ✅ SyntheticEvent 객체 사용

```jsx
function InputComponent() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }
  return <input type="text" onChange={handleChange} />;
}
```

### ✅ 클래스 컴포넌트에서의 핸들러 바인딩

```jsx
class ButtonComponent extends React.Component {
  handleClick = () => {
    alert("클래스 컴포넌트 버튼 클릭!");
  };
  render() {
    return <button onClick={this.handleClick}>클릭</button>;
  }
}
```

### ✅ 인자 전달

```jsx
function ButtonComponent() {
  function handleClick(name) {
    alert(`${name}님, 버튼을 클릭했습니다!`);
  }
  return <button onClick={() => handleClick("홍길동")}>클릭</button>;
}
```

### ✅ 상태 변경

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
```

### ✅ 기본 동작 방지 & 전파 중지

```jsx
function FormComponent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("폼 제출이 방지되었습니다.");
  };
  return <form onSubmit={handleSubmit}><button>제출</button></form>;
}

function Parent() {
  function handleParentClick() {
    alert("부모 클릭");
  }
  function handleChildClick(e) {
    e.stopPropagation();
    alert("자식 클릭");
  }
  return <div onClick={handleParentClick}><button onClick={handleChildClick}>클릭</button></div>;
}
```

### ✅ useCallback 최적화

```jsx
const handleClick = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);
```

---

## 📌 Conditional Rendering (조건부 렌더링)

### ✅ 개념

* 조건에 따라 렌더링을 다르게 처리하는 기법
* 예: 로그인 상태에 따라 UI 다르게 표시

### ✅ Truthy/Falsy 값

* **Falsy**: `false`, `0`, `""`, `null`, `undefined`, `NaN`
* **Truthy**: 그 외 값 (예: `"hello"`, `[]`, `{}`)

### ✅ 연산자 활용

```js
false || "안녕";   // "안녕"
true && "환영";    // "환영"
user ?? "기본값";  // null/undefined일 때만 기본값 사용
```

### ✅ 엘리먼트 변수

```jsx
const greeting = isLoggedIn ? <h1>환영합니다!</h1> : <h1>로그인 해주세요.</h1>;
return <div>{greeting}</div>;
```

### ✅ 인라인 조건

```jsx
{isAdmin && <p>관리자입니다.</p>}
{userName || "Guest"}
```

### ✅ 조건부 렌더링 방법

| 방법        | 예시                              | 특징           |
| --------- | ------------------------------- | ------------ |
| 삼항 연산자    | `{condition ? A : B}`           | 간결한 표현       |
| 논리 연산자 && | `{condition && A}`              | 참일 때만 A 렌더링  |
| if문       | `if (condition) return A;`      | 명확한 분기       |
| 컴포넌트 분리   | `<A /> or <B />`                | 재사용성 증가      |
| IIFE      | `{(() => condition ? A : B)()}` | 복잡한 조건 처리 가능 |
| switch문   | `switch (value)`                | 여러 조건 처리에 적합 |

### ✅ 실습 예시

```jsx
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

### ✅ 툴바 예시 컴포넌트

```jsx
function Toolbar({ isLoggedIn, onClickLogin, onClickLogout }) {
  return (
    <div>
      {isLoggedIn && <span>환영합니다!</span>}
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}
```

---

## 📚 참고자료

* [React Events 공식문서](https://legacy.reactjs.org/docs/events.html)
* [React 조건부 렌더링 공식문서](https://legacy.reactjs.org/docs/conditional-rendering.html)
