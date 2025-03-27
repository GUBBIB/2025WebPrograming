# 4주차 수업내용

## 컴포넌트(Component)
- 리액트 엘리먼트를 생성하여 리턴해 주는 것이다.

### State
*****

#### state란?
- **리액트 컴포넌트의 상태**, **리액트 컴포넌트의 변경 가능한 데이터** 를 의미한다.

**※렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 한다.**

#### state의 특징
- state는 ``자바스크립트 객체`` 이다.
- state를 **변경** 하고자 할 때는 **반드시** ``setState()함수`` 를 사용해야한다.

```javascript
// X
this.state = {
    name: 'Inje';
};

// O
this.setState({
    name: 'Inje'
});
```

### 생명주기(Life Cycle)
---
#### 생명주기란?
- 컴포넌트가 생성되는 시점과 사라지는 시점이 정해져 있음을 의미한다.

![생명주기 설명 사진](https://github.com/user-attachments/assets/023c240b-50c4-4a73-8dd2-d60a5497ba5f)

**※리액트 컴포넌트는 ``탄생(Mount)`` -> ``변화(Update)`` -> ``제거(Unmount)`` 의 과정을 반드시 거친다.**

<!--
Report - (report-react-app)
웹사이트를 5개 이상의 컴포넌트로 구성하세요
2개 이상의 props를 전달하는 컴포넌트를 하나 이상 포함하세요
-->

<!-- 데이터/ai 활용 역량 강화과정 -->