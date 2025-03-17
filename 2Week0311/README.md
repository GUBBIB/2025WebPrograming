# 2주차 수업내용

### 목차
- 마크업이란?
- 마크다운이란?
- Emmet이란?
- npm install create-react-app -g 란?
- JSX 사용법

## 마크업(MarkUp)이란?
**마크업 언어** 는 **"마크(Mark)"** 로 둘러싸인 언어라는 뜻이며 **"태그(Tag)"** 로 둘러싸였다고도 표현한다.
``HTML, XML 등``에서 **마크업 언어**를 사용하며 **문서의 골격에 해당하는 부분을 작성**하는데 사용한다.

## 마크다운(MarkDown)이란?
**마크다운 언어** 는 **마크업 언어의 일종** 이며 ``읽기, 쓰기가 쉽다는 장점``이 있다.<br>
마크다운 언어문서를 HTML 파일로 변환하는 ``펄 스크립트``가 있으며 그 파일이 바로 README 파일인 ``.md 확장자``의 파일이다.

## Emmet이란?
**Emmet** 은 개발자가 코드를 더 **빠르고** **효율적** 으로 작성할 수 있도록 해주는 ``에디터 확장기능``이다.<br>
예를 들어 웹 페이지의 **전체 HTML 구조**를 입력하는 대신 ``html>head>title+body``와 같이 작성하고 ``Tab키`` 또는 ``엔터``를 누르면 자동완성이 된다.

## npm install create-react-app -g 란?
``npm install create-react-app -g`` 명령어로 설치를 하면 ``-g`` 옵션 때문에 **전역(Gloabl)** 로 설치가 된다.<br>
**전역설치** 와 **로컬설치** 의 차이점은 명령어 실행 방식이다.<br>


||전역(Global)설치|로컬(Local)설치|
|--|---------------|--------------|
|React 생성|**create-react-app my-app**|**npx create-react-app my-app**|

**전역** 으로 설치를 하면 **간편하게 React 프로젝트를 생성** 할 수 있지만 ``업데이트 관리`` 와 ``프로젝트별 버전 차이 문제`` 등의 이유로 **특별한 이유** 가 있는게 아니라면 **로컬설치** 가 일반적이다.

## JSX 사용법
### 1. 기본 구조
- **#1**, **#2**와 같이 반드시 하나의 부모 요소로 감싸야 한다.
```javascript
// #1
function App() {
    return (
        <div>
            <h1>Hello, JSX!</h1>
            <p>React에서 JSX를 사용합니다.</p>
        </div>
    );
}
```
```javascript
// #2
function App() {
    return (
        <>
            <h1>Hello, JSX!</h1>
            <p>React에서 JSX를 사용합니다.</p>
        </>
    );
}
```
- 부모요소가 없으면 에러가 난다.
```javascript
// #에러 발생
function App() {
    return (
        <h1>Hello, JSX!</h1>
        <p>React에서 JSX를 사용합니다.</p>
    );
}
```

### 2. 자바스크립트 표현식
- **JSX 내부** 에서 **JavaScript 표현식** 을 ``{}``로 감싸서 사용할 수 있다.
```javascript
// #1
const name = "React";
function App() {
    return <h1>Hello, {name}!</h1>;
}
```
```javascript
// #2
function getGreeting(name) {
    return `Hello, ${name}!`;
}

function App() {
    return <h1>{getGreeting("React")}</h1>;
}
```
```javascript
// #3
function App() {
    return <p>2 + 3 = {2 + 3}</p>;
}
```

### 3. JSX에서 속성(props) 사용
- JSX에서는 **HTML 속성**과 ``유사한 방식``으로 속성을 설정할 수 있지만, **일부 속성은 JavaScript 문법**을 따른다.
```javascript
// #1
const imgUrl = "https://via.placeholder.com/150";
function App() {
    return <img src={imgUrl} alt="Sample Image" />;
}
```
```javascript
// #2
function App() {
    return <h1 className="title">Hello, JSX!</h1>;
}
```
```javascript
// #3
const styleObj = { color: "blue", fontSize: "20px" };

function App() {
    return <h1 style={styleObj}>Styled Text</h1>;
}
```

### 4. 조건부 렌더링
-  **삼항 연산자** 를 사용하여 ``조건부 렌더링``을 구현할 수 있다.
```javascript
// #1
function App({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
}
```
```javascript
// #2
function App({ isAdmin }) {
    return (
        <div>
            <h1>Hello, User!</h1>
            {isAdmin && <p>관리자 권한이 있습니다.</p>}
        </div>
    );
}
```

### 5. JSX에서 반복문 사용 (배열과 map())
- JSX에서는 **for문을 직접 사용할 수 없고** , ``map() 메서드``를 이용해 **반복 렌더링**을 해야 한다
```javascript
// ※ key 속성을 반드시 추가해야 React가 효율적으로 렌더링할 수 있다.
const fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];

function App() {
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li> // key 속성 필수
            ))}
        </ul>
    );
}

반복문 실행 후 -> 
<ul>
  <li key={0}>🍎 Apple</li>,
  <li key={1}>🍌 Banana</li>,
  <li key={2}>🍊 Orange</li>
</ul>
이런 형태로 실행이 된다.
```

### JSX에서 이벤트 처리
- JSX에서는 **이벤트**를 ``onClick``, ``onChange`` 등의 속성으로 설정할 수 있다
```javascript
// #1
function App() {
    function handleClick() {
        alert("버튼이 클릭되었습니다!");
    }

    return <button onClick={handleClick}>Click Me</button>;
}
```
```javascript
// #2
function App() {
    function handleChange(event) {
        console.log("입력값:", event.target.value);
    }

    return <input type="text" onChange={handleChange} />;
}
```

## 참고
- [마크업(MarkUp)과 마크다운(MarkDown) 이란?](https://tlsdnjs12.tistory.com/32)
- [ChatGPT](https://chatgpt.com/share/67d2d99b-9c88-8012-852f-8b30cf760648)
<!-- 
자바스크립트로만 자기 소개 페이지 완성 
JSX 사용법
JSX 속성 주는 법, 객체 사용
JSX는 IF 없음 && || 사용해서 참 거짓 구분 
-->