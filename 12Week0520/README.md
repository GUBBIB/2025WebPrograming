# 12주차 수업내용

# React TODO List 정리

## 1. 프로젝트 초기 세팅

```bash
npx create-react-app mashup-todolist
cd mashup-todolist
yarn add react-icons styled-components
```

## 2. 컴포넌트 구성

* **TodoTemplate**: 전체 레이아웃 컴포넌트
* **TodoHead**: 오늘 날짜, 요일, 남은 할 일 개수 표시
* **TodoList**: 할 일 목록 출력 (map 사용)
* **TodoItem**: 개별 할 일 항목 (완료 토글, 삭제 가능)
* **TodoCreate**: 새로운 할 일 추가 폼 (버튼 클릭으로 폼 토글)

## 3. 전역 스타일 적용

```js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
```

## 4. TodoTemplate

```js
const TodoTemplateBlock = styled.div`
  width: 512px; height: 768px;
  background: white; border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  margin: 96px auto 32px;
  display: flex; flex-direction: column;
`;
```

## 5. TodoHead

* `useTodoState()`로 상태 조회
* `filter(todo => !todo.done).length`로 남은 할 일 계산
* `Date.toLocaleDateString()` 활용

## 6. TodoList

* `useTodoState()`로 todos 불러오기
* `todos.map(todo => <TodoItem ... />)` 형태로 렌더링

## 7. TodoItem

* `useTodoDispatch()`로 dispatch 호출
* 완료: `dispatch({ type: 'TOGGLE', id })`
* 삭제: `dispatch({ type: 'REMOVE', id })`
* 성능 최적화: `export default React.memo(TodoItem)`

## 8. TodoCreate

* `useState`로 open, value 관리
* `useTodoDispatch`, `useTodoNextId()` 활용
* onSubmit 시 새로운 할 일 추가 후 입력 초기화

## 9. Context API를 이용한 상태 관리

* `TodoStateContext`, `TodoDispatchContext`, `TodoNextIdContext` 생성
* `useReducer()`로 상태 업데이트 (CREATE, TOGGLE, REMOVE)
* `useContext()`를 커스텀 Hook (`useTodoState`, `useTodoDispatch`, `useTodoNextId`)으로 제공
* 예외 처리: 커스텀 Hook 내에서 Provider 없을 시 에러 throw

## 10. TodoProvider로 전체 앱 감싸기

```js
<TodoProvider>
  <GlobalStyle />
  <TodoTemplate>
    <TodoHead />
    <TodoList />
    <TodoCreate />
  </TodoTemplate>
</TodoProvider>
```

## 11. 참조 자료

* [https://react.vlpt.us/mashup-todolist/01-create-components.html](https://react.vlpt.us/mashup-todolist/01-create-components.html)
* [https://styled-components.com/docs](https://styled-components.com/docs)
* [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global\_Objects/Date/toLocaleString](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)


<!--
2024/Web Programming09.pdf

- useReducer 확인 -
- Context API 를 활용한 상태 관리
• 프로젝트의 규모가 커지게 된다면 최상위 컴포넌트인 App 에서 모든 상태 관리를 하기엔 App 컴
포넌트의 코드가 너무 복잡해질 수도 있고, props 를 전달해줘야 하는 컴포넌트가 너무 깊숙히 있
을 수도 있다. 만약 Context API를 활용한다면 다음과 같이 구현 할 수 있다

ㄴ Zustand 가 Context, Reducer 없이 간편하게 사용할 수 있는 라이브러리이다.
- set과 get이 있는데 get은 잘 사용 안함

- ppt 구성 -

프로젝트 소개
ㄴ 더 구체적이게 
ㄴ 사용한 모든 툴 
ㄴ 프로젝트 구조 
ㄴ 서버 요청 흐름


진행과정
ㄴ 1주차 뭐 했고 2주차 뭐 했고 

따라만들기


마무리


! 스웨거 사용 ( 프론트가 api를 쉽게 확인 가능 )
! 백, 프론트 서버 분할
ㄴ Laravel은 기본적으로 php artisan serve로 8000 포트에서 돌아갑니다.
ㄴ React는 일반적으로 npm start로 3000포트에서 돌아갑니다.

! cors 해결
! 로그인 기능 다시 짜기 ( JWT, 세션 )
! 라라벨 미들웨어 확인
ㄴ 에러 Handler 생각
ㄴ Multer
ㄴ 몽고 DB [ Json 형식으로 데이터를 저장, 스키마가 유연한 대신 복잡한 관계형 데이터 처리가 비 효율적]
    - Atlas 몽고 디비 Web Cloud
    - Compass는 몽고 디비의 공식 GUI 도구 << 이거 때문에 몽고 디비를 사용하는 이유가 큼
-->