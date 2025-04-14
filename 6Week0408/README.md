# 6주차 수업내용

## ✅ Hooks란?
- 기존에는 클래스형 컴포넌트에서만 `state`, `생명주기(lifecycle)` 기능을 사용 가능
- Hooks를 통해 함수형 컴포넌트에서도 상태 관리와 생명주기 기능 사용 가능
- 코드가 간결하고 재사용성이 높아짐
- Hook의 이름은 `use`로 시작 (ex. `useState`, `useEffect`)

---

## 📌 useState()
> 상태(state)를 함수형 컴포넌트에서 관리할 수 있도록 해주는 Hook

### 🔹 기본 문법
```jsx
const [state, setState] = useState(initialValue);
```
- `state`: 현재 상태 값
- `setState`: 상태를 변경하는 함수
- `initialValue`: 상태 초기값

### 🔹 예시
```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>클릭</button>
```

### 🔹 특징
- set 함수는 비동기
- 객체/배열 상태 업데이트 가능 (`prev => {...prev}` 또는 `[...prev, 새 요소]`)
- 복잡한 상태는 `useReducer` 고려

---

## 📌 useEffect()
> 컴포넌트 외부 시스템과 동기화 / 사이드 이펙트 관리

### 🔹 기본 문법
```jsx
useEffect(() => {
  // 실행할 코드
  return () => {
    // cleanup 함수
  };
}, [dependencies]);
```

### 🔹 사용 예시
- 마운트 시 한 번만 실행: `useEffect(() => {...}, [])`
- 특정 상태 변화 시: `useEffect(() => {...}, [count])`
- 언마운트 시 cleanup: `return () => {...}`

### 🔹 예시 코드
```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

---

## 📌 useMemo()
> 연산 비용이 큰 계산 결과를 캐싱하여 성능 최적화

### 🔹 기본 문법
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 🔹 사용 시점
- 연산량이 큰 함수 결과 캐싱
- 참조형 데이터(객체, 배열) 재생성 방지

### 🔹 주의사항
- 모든 계산을 메모이제이션하는 것은 오히려 성능 저하 유발 가능
- 계산 함수는 순수 함수여야 함

---

## 📌 useCallback()
> 함수를 메모이제이션하여 동일 함수가 매번 재생성되는 것을 방지

### 🔹 기본 문법
```jsx
const memoizedCallback = useCallback(() => {
  // 콜백 로직
}, [dependencies]);
```

### 🔹 사용 예시
- 부모 컴포넌트에서 자식 컴포넌트로 함수 props 전달 시
- 불필요한 재렌더링 방지

---

## 📌 useRef()
> DOM 요소에 직접 접근하거나, 렌더링에 영향을 주지 않는 데이터를 저장할 때 사용

### 🔹 기본 문법
```jsx
const ref = useRef(initialValue);
ref.current // 현재 값
```

### 🔹 활용 예
- DOM 접근: `inputRef.current.focus()`
- 렌더링 없이 값 저장: `ref.current += 1`
- 이전 값 저장: `useEffect(() => { ref.current = value }, [value])`

---

## 📌 Custom Hook
> 여러 컴포넌트에서 공통으로 사용하는 Hook 로직을 재사용 가능한 함수로 추출

### 🔹 예시 - useCounter
```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}
```

### 🔹 예시 - useFetch
```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
}
```

---

## 📌 Hook 사용 규칙
1. 최상위 레벨에서만 호출 (조건문/반복문 안에서 호출 X)
2. 함수형 컴포넌트 or Custom Hook 내에서만 호출
3. ESLint 플러그인 사용 추천: `eslint-plugin-react-hooks`

---
<!--
김경민 - 07훅
06React_Hook
2024/Web_Programing05

훅이란
ㄴ useState에서 count, setCount가 뭐냐 뭔데 useState(0); 으로 객체를 주냐
ㄴ 변수의 값이 바뀌면 자동으로 "리 렌더링" 해주는게 useState이다

컴포넌트 안의 변수 = state이다.
state는 값을 바꿀 수 있다.
state의 값이 바뀌면 자동으로 리렌더링 하게 해주는게 있는데 그게 useState이다 
즉, 유동적인 변수를 사용할 떄 화면에 그려지는 변수도 정상적으로 변경되길 원한다면 사용한다.

- state변수를 변경할 거라면 세터게터 마냥 지정된 함수만 사용해야 한다.
밑의 예시로 state 를 변경하라면 setState(state+1) 이런식으로

const [state, setState] = useState(initialValue);
state: 현재 상태 값
setState: 상태를 변경하는 함수
initialValue: 상태의 초기 값

동기화 개념잡기
sync, block, non block sync, block sync

array destructuring

***************************************
리액트로 레포트 웹 만드는데 (페이지 개수 상관 X) 누군가에게 도움이 되는 웹 페이지를 만들어라
ㄴ 홍보성, 공부 등
단, props: 3개 이상, state: 3개 이상 활용
***************************************
-->