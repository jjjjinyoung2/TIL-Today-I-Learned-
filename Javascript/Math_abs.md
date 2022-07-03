Math.abs(x)

파라미터로 입력 된 x의 절대값 (Absolute Value)를 리턴한다.

여기서 Math는 Java Script에서 수학적인 상수와 메소드를 가진 내장객체이다.

Math의 모든 속성과 메소드는 정적이기 때문에, new 연산자로 객체를 생성하지 않고 바로 사용한다.

```jsx
Math.abs(-10); // 10
Math.abs(-10.123); // 10.123
Math.abs(10); // 10
Math.abs("-2"); // 2

//boolean 값이 입력되면 true인 경우 1, false인 경우 0을 리턴
Math.abs(true); // 1
Math.abs(false); // 0

//빈 문자열이 입력되면 0을 리턴합니다.
Math.abs(""); // 0

//null이 입력되면 0을 리턴합니다.
Math.abs(null); // 0

//undefined 값이 입력되면 NaN(Not a Number)을 리턴합니다.
Math.abs(undefined); // NaN

//숫자로 변환할 수 없는 문자열이 입력되면  NaN(Not a Number)을 리턴합니다.
Math.abs("banana"); // NaN
```
