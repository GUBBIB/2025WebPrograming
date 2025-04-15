# 7주차 수업내용


<!--
state 도 변수인데 일반 적인 변수가 아니라 값이 바뀌면 화면도 바뀐다.
```python
const [count, setCount] = useState(0);
```
에서 setCount를 사 용해서

- 생명주기 -
마운트(Mount/탄생) = 처음 Dom에 나타날때, 렌더링 될 때
언마운트(UnMount/제거) = Dom에서 사라질 때 

useEffect(setup, dependencies)
setup = 실행할 함수
dependencies = 의존성 배열[특정 값이 변경될 때만 실행]

- useEffet() 는 4가지 선언 방법이 있다.
1. 마운트 시
2. state값 변경시
3. 렌더링 마다
4. 언마운트 시

useMemo()
- 알고리즘에서 메모이제이션과 같은 일을 한다.
useMemo(() => {계산할 함수}, [의존성 배열]);
계산 코드 를 재사요할 때 사용한다.

useCallback()
- 함수 메모이제이션을 제공한다.
function함수를 재사용할 때 사용한다
- 형태는 useMemo()와 비슷하다.

useRef()
- 특정 컴포넌트에 접근할 수 있는 객체를 의미
- 함수형 컴포넌트에서 DOM 요소에 직접 접근하거나, 값이 변경되더라도 리렌더링을 유발
하지 않는 변수를 저장하는 데 사용됩니다.


-->