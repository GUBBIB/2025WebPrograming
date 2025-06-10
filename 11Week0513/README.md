# 11주차 수업내용

# 📚 React - Lists & Keys & Forms

## 🔹 Lists & Keys

### 🔸 map() 함수

* 배열의 각 요소를 변환하여 **새로운 배열**을 생성
* 원본 배열은 변경되지 않음

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

### 🔸 React에서 map() 사용 예

```jsx
const items = ['Apple', 'Banana', 'Cherry'];

function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### 🔸 키(Key)의 필요성

* 리스트 요소마다 고유한 키는 **React가 변경 사항을 추적**하는 데 필요

### 🔸 최고의 방식: 고유 ID 사용

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

> ❗ `index`를 key로 사용하는 것은 비추약 (DOM 순서 변경에 대해)

---

## 🔹 Forms

### 🔸 Form 구조

| 요소                                  | 설명          |
| ----------------------------------- | ----------- |
| `<form>`                            | 폼 전체 감싸는 태그 |
| `<input>`, `<textarea>`, `<select>` | 입력 필드       |
| `onChange`                          | 입력값 변경 이벤트  |
| `onSubmit`                          | 폼 제출 이벤트    |
| `useState`                          | 입력 상태 관리    |

### 🔸 Controlled Component 예제

```jsx
import { useState } from "react";

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('입력한 이름 : ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

---

## 🔸 다양한 Form 요소

### ✅ TextArea

```jsx
<textarea value={value} onChange={handleChange} />
```

### ✅ Select (드래그래인)

```jsx
<select value={value} onChange={handleChange}>
  <option value="apple">사과</option>
  <option value="banana">바나나</option>
</select>
```

### ✅ Checkbox / Number

```jsx
<input type="checkbox" checked={boolState} onChange={(e) => setBoolState(e.target.checked)} />
<input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
```

---

## 🔸 여러 입력값 관리

### ✅ 다중 useState

```jsx
const [haveBreakfast, setHaveBreakfast] = useState(true);
const [numberOfGuest, setNumberOfGuest] = useState(2);
```

### ✅ 하나의 객체로 상태 관리

```jsx
const [formData, setFormData] = useState({ name: "", email: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
```

---

## 🔸 useRef를 활용한 비제어 컨포넌트

```jsx
import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`입력된 값: ${inputRef.current.value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">제출</button>
    </form>
  );
}
```

---

## 🔮 실습 예제

### 📁 AttendanceBook.jsx

```jsx
const students = [
  { id: 1, name: "Inje" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Bill" },
  { id: 4, name: "Jeff" },
];

function AttendanceBook() {
  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}
```

### 📁 SignUp.jsx

```jsx
function SignUp() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

<!--
09React_ListsNKeys.pdf

-->e