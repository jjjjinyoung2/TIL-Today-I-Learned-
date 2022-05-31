모든 모듈은 ‘모듈을 사용하기 위해 불러오는 과정’이 필요하다.

HTML에서 JavaScript 불러오는 script 태그

```jsx
<script src = "불러오고싶은_스크립트.js"><script>
```

Node.js에서는 JavaScript 코드 가장 상단에 require 구문을 이용해 다른 파일을 불러온다.

```jsx
const fs = require("fs"); // 파일 시스템 모듈을 불러온다.
const dns = require("dns"); // DNS 모듈을 불러온다.

// 이제 fs.readFile 메서드 등을 사용 할 수 있다!
```

## 3rd-party 모듈을 사용하는 방법

서드파티모듈은 해당 프로그래밍 언어에서 공식적으로 제공하는 빌트인(built-in module) 모듈이 아닌 모든 외부 모듈. Node.js 공식 문서에는 없는 모듈을 다운 하기 위해서는 npm 사용.

```jsx
npm install underscore // underscore 모듈 설치(해당 부분에 필요한 모듈이름 작성)
```

node-modules에 underscore 설치완료!

```jsx
const _ = require("underscore"); // javascript 파일 가장 상단에 작성
```

## Node.js 공식 문서 가이드

메서드 fs.readFile : 로컬에 존재하는 파일 읽어온다.

- \***\*fs.readFile(path[, options], callback)\*\***

: 비동기적으로 파일 내용 전체를 읽는다.

이 메소드를 실행할 때는 전달인자 세 개를 받는다.

- **path \<string> | \<Buffer> | \<URL> | \<integer>**

path에는 파일이름을 전달인자로 받는다. 일반적으로 문자열(<string>)타입을 받는다.

```jsx
fs.readFile('/etc/passwd',...,...) // '/etc/passwd'파일을 불러오는 예제
```

- **options \<Object> | \<string>**

대괄호(선택적 전달인자)로 감싼 두번째 전달인자 options 는 넣을 수도 있고, 넣지 않을 수도 있다.

options 는 문자열 또는 객체 형태로 받을 수 있다. 문자열로 전달 할 경우 인코딩을 받는다.

```jsx
// /etc/passwd 파일을 'utf8'을 사용하여 읽는다.
fs.readFile('/etc/passwd' , 'utf8' , ...);
//두번째 전달인자 options에 문자열을 전달한 경우
```

```jsx
let options = {
	encoding: 'utf8' , // utf8 인코딩 방식으로 연다.
	flag: 'r' //읽기위해 연다.
}
// /etc/passwd 파일을 options를 사용하여 읽는다.
fs.readFile('/etc/passwd' , options, ...)
//두번째 전달인자 options에 객체를 전달한 경우
```

- **callback \<Function>**
  - err \<Error> | \<AggregateError>
  - data \<string> | \<Buffer>
    콜백함수를 전달한다. 파일을 읽고 난 후에 비동기적으로 실행되는 함수.
    콜백함수에는 두가지 매개변수 O
    에러가 발생하지 않으면 err 또는 null 이 되며, data에 문자열이나 Buffer라는 객체가 전달된다.
  ```jsx
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (arr) {
      throw err; // 에러를 던진다.
    }
    console.log(data);
  });
  //메서드 fs.readFile로 파일의 데이터를 읽을 수 있다.
  ```
  ## \***\*fetch API\*\***
  비동기 요청의 가장 대표적인 사례는 **네트워크 요청**
  그 중 URL로 요청하는 것을 가능하게 해주는 API 가 fetch API 이다.
  웹사이트 중 날씨나 최신뉴스처럼 동적으로 데이터를 받아와야하는 정보만 업데이트 하기 위해서 요청API 를 이용한다.
  fetch API 는 특정 URL 로부터 정보를 받아오는 역할을 한다. 이 과정이 비동기로 이루어짐
  ```jsx
  //fetch API를 사용하여 데이터를 요청
  let url =
    "https://v1.nocodeapi.com/codestates/google_sheets/YbFMAAgOPgIwEXUU?tabId=최신뉴스";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
  ```
