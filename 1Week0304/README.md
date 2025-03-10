# 1주차 수업내용

## MPA와 SPA
**MPA(Multi-Page App Lifecycle)** 는 여러 개의 Page로 구성된 App이라는 뜻이고 **SPA(Single-Page App Lifecycle)** 는 한 개의 Page로 구성된 App이라는 뜻이다.

``MPA방식``은 새로운 페이지를 요청할 때마다 필요없는 요소까지 모두 다운해서 페이지를 갱신한다.<br>
하지만 ``SPA방식``은 필요한 요소만 다운하여 페이지를 갱신한다.

### 장단점
- ``MPA의 장점``은 **SEO(Search Engine Optimization, 검색엔진 최적화)** 관점에서 유리하며 첫 로딩 시간이 매우 짧다는 것이다.
다만 불필요한 요소까지 중복해서 로딩을 하기 때문에 성능면에서 좋지 않다.
- ``SPA의 장점``은 필요한 요소만 로딩을 하기 때문에 성능면에서 좋고 전체 페이지가 갱신되는것이 아니기에 화면의 깜빡거림이 없어 사용자의 경험이 좋다.
다만 **SEO**가 크롤링할 컨텐츠가 존재하지 않아 **SEO** 관점에서 불리하며 보안 이슈가 있다.

## React
### npm과 npx
- **npm(Node Package Manager)** 는 ``Node.js 패키지``를 관리하는 패키지 매니저이다.
- **npx(Node Package Execute)** 는 ``npm 패키지``를 실행하는 도구이며 패키지 설치 없이 바로 실행이 가능하다.

※ npm은 패키지 관리용, npx는 패키지 실행용

### CRA(Create React App)와 Vite
- **CRA** 는 **Webpack** 을 사용해서 React를 실행하는 **번들러** 이다.
- **Vite** 는 Webpack보다 **빠른 개발 서버** 와 **빌드 속도** 를 제공하며 다양한 프레임워크를 지원해준다.

### JSX
- **JSX(JavaScript XML)** 는 ``HTML과 JavaScrikpt를 결합한 문법``이며 React 요소를 생성하는데 사용이 된다.
- JSX는 **React** 에서 ``UI를 선언적으로 작성할 수 있도록 도와주는 문법`` 이며 ``컴포넌트 기반 개발을 쉽게`` 할수 있도록 도와준다.

```
# JSX 사용 코드
import React from "react";
import ReactDOM from "react-dom";
function App() {
    return (
    <div>
        <h1>Hello, JSX!</h1>
        <p>This is a JSX example.</p>
    </div>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

```
# JSX 미사용 코드
import React from "react";
import ReactDOM from "react-dom";
function App() {
    return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello, JSX!"),
    React.createElement("p", null, "This is a JSX example.")
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
```

위에 예시를 보면 알 수 있듯이 JSX를 사용하는 것이 필수는 아니지만 JSX를 사용하면 훨신 수월하게 개발이 가능해진다.

### JSX의 장점 5가지

1. 가독성이 좋고 직관적임
2. 코드가 간결하고 유지보수가 쉬움
3. 자바스크립트와 자연스럽게 결합 가능
4. 조건부 렌더링이 쉬움
5. 스타일 및 이벤트 핸들링이 쉬움

## 참고
- [SPA vs MPA와 SSR vs CSR 장단점 뜻정리](https://hanamon.kr/spa-mpa-ssr-csr-%EC%9E%A5%EB%8B%A8%EC%A0%90-%EB%9C%BB%EC%A0%95%EB%A6%AC/)
