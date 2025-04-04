# 3주차 수업내용
### 목차
- DOM 과 Virtual DOM
    - DOM 이란?
    - Virtual DOM 이란?
- 엘리먼트?
    - 엘리먼트(Elements) 란?
    - 엘리먼트의 구성요소
    - 엘리먼트의 특징
- Pure함수
    - Pure함수 란?
- 참고

<!-- ## 구분 줄 -->

## DOM과 Virtual DOM
### DOM 이란?
**DOM(Document Object Model)** 은 웹페이지의 구조를 트리 형태로 표현한 것이다.<br>
HTML을 **자바스크립트**가 **이해할 수 있도록** ``객체(Object)``로 변환한 것이며 **DOM을 조작**해서 웹페이지를 **동적**으로 변경할 수 있다.

### Virtual DOM 이란?
**Virtual DOM(Virtual Document Object Model)** 은 실제 DOM을 **직접 변경하지 않고**, 메모리에서 **가상의 DOM**을 만들어 변경사항을 비교한 후, **필요한 부분만** 실제 DOM에 **렌더링** 하는 방식이다.

**※** **React Elements** 는 **Virtual DOM을 생성** 하고 **변경된 Virtual DOM** 은 **실제 DOM** 에 반영되어 브라우저에 ``렌더링``된다.

<!-- ## 구분 줄 -->

## 엘리먼트(Elements)
### 엘리먼트(Elements) 란?
- **엘리먼트** 란 리액트 앱을 구성하는 **가장 작은 블**록 즉, ``태그``를 말한다.<br>
- ``시작 태그``와 ``끝 태그``가 있는 **모든 것** 은 HTML 엘리먼트로 본다.

### 엘리먼트의 구성요소
- **리액트 엘리먼트(React Elements)** 는 자바스크립트 ``객체`` 형태로 존재한다.

|||
|--|--|
|type|태그의 이름|
|props|속성들|
|children|렌더링 된 자식 태그|

```html
<!-- 예시 -->
<button class='bg-green'>
    <b>
        Hello, element!
    </b>
</button>
```
```javascript
// 렌더링된 DOM 엘리먼트
{
    type: 'button',
    props: {
        className: 'bg-green',
        children: {
            type: 'b',
            props: {
                children: 'Hello, element!'
            }
        }
    }
}
```

### 엘리먼트의 특징
- 불변성 : 변하지 않는 성질

엘리먼트 생성 후에는 ``children``이나 ``attributes``를 **바꿀 수 없다**.<br>
바꾸기 위해서는 **새로운 엘리먼트를 만들어** 기존의 엘리먼트와 **변경** 하고 **해당 부분만 다시 렌더링** 해야한다.

<!-- ## 구분 줄 -->

## Pure함수
### Pure함수 란?
**Pure함수** 란 ``#1``, ``#2``와 같이 **동일한 입력 값에 동일한 출력을 반환**하며, **함수 외부 상태에 영향을 미치지 않는 함수**를 말한다.

```javascript
// #1
function add(a, b){
    return a + b;
}
```
```javascript
// #2
let x = 10;

function add(a, b){
    return a + b;
}

console.log(add(2, 3));
```

<!-- ## 구분 줄 -->

## 컴포넌트
### 컴포넌트 종류
- 함수형 컴포넌트
```javascript
function Welcom(props){
    return <h1>안녕, {props.name}</h1>;
}
```
※ **메소드의 이름** 이 ``대문자``로 시작하는 이유는 ``컴포넌트`` 임을 알리기 위해서이다.

- 클래스형 컴포넌트
```javascript
class Welcom extends React Component {
    render() {
        return <h1>안녕, {this.props.name}</h1>;
    }
}
```

※ 과거에는 함수형 컴포넌트보다 많은 기능을 제공했지만, **현재** 는 ``함수형 컴포넌트``와 ``Hooks``로 대부분의 기능을 대체할 수 있다.<br>
레거시 코드나 특수한 경우에 사용될 수 있다.

### 컴포넌트 합성
- 여러개의 컴포넌트를 하나의 컴포넌트에 넣어서 합치는 것이다.
```javascript
function Welcom(props){
    return <h1>Hello, {props.name}</h1>;
}

function App(props){
    return (
        <div>
            <Welcom name="Mike" />
            <Welcom name="Steve" />
            <Welcom name="Jane" />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.rendor(<App />);

// 이런식으로 생김
┌ㅡㅡㅡㅡ App ㅡㅡㅡㅡ┐;
<Welcom name="Mike" />
<Welcom name="Steve" />
<Welcom name="Jane" />
└ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ┘
```

### 컴포넌트 추출
```javascript
function Comment(props){
    return (
        <div className="comment">
            <div className="user-info">
                <Avatar user={props.author} />
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className="comment-text">
                {props.text}
            </div>

            <div classNmae="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
```
- 이런 1개의 큰 컴포넌트가 있을 때, ``Comment``, ``Userinfo``, ``Avatar`` 컴포넌트 3개로 **나눠서** 사용하는게 **재사용**에 더 용이하다.

## 참고
- [DOM vs Virtual DOM](https://velog.io/@ye-ji/DOM-vs-Virtual-DOM)
- [[JavaScript] Pure Function(순수 함수)](https://velog.io/@nittre/JavaScriptFunction-Composition-Series-1.-Pure-Function)