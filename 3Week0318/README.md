# 3주차 수업내용
### 목차
- 엘리먼트?
    - 엘리먼트(Elements) 란?
    - 엘리먼트의 구성요소

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


<!-- 
- 김경민/엘리먼트 렌더링
- 2024/Web Programing 03
- 김경민/컴포넌트와 Props
- 강의자료/04React_Component

전체를 바꾸지 않는 기법 - SPA, ajax

자바스크립트의 객체는 키 벨류 의 쌍
[ key : value ]

버츄얼 DOM = 리액트 엘리멘트로 
브라우저 DOM = DOM 엘리멘트로 

programing03에 바이너리 시계 

- pure 함수 란?
- 함수형 컴포넌트, 클래스형 컴포넌트 (김경민/컴포넌트와 props 에서 컴포넌트 만들기 참고)
ㄴ 일반 함수가 아님을 알리기 위해, 컴포넌트 임을 알리기위해 이름을 대문자로 시작한다
ㄴ 클래스형은 거의 안 쓴다
ㄴ Hook 을 사용함으로써 클래스형 컴포넌트는 사용하지 않는다
- 컴포넌트 합성, 추출
- Component Extraction 3개 해보기
- 댓글 컴포넌트 만들어보기


binary-clock - clock1, clock2 확인
-->