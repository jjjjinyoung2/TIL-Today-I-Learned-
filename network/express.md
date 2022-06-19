MERN stack은 JavaScript 생태계에서 인기 있는 프레임워크인

**MongoDB, Express, React, Node.js**를 지칭하는 말이다. 이 중에서 **Express** 는 Node.js 환경에서 웹 서버, 또는 API 서버를 제작하기 위해 사용되는 인기 있는 프레임워크

- Express로 구현한 서버가 Node.js HTTP 모듈로 작성한 서버와 다른 점

1. 미들웨어를 추가할 수 있다.
2. [라우터](https://expressjs.com/ko/guide/routing.html)를 제공한다.

## **Express 시작하기**

\***\*1. Express 설치\*\***

`npm install express`

\***\*2. 간단한 웹 서버 만들기\*\***

[Express "Hello World" 예제](https://expressjs.com/ko/starter/hello-world.html)

```jsx
//응답으로 'Hello World!' 를 보내는 Express 서버 코드
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

\***\*3. 라우팅: 메서드와 url에 따라 분기(Routing)하기\*\***

[기본 라우팅](https://expressjs.com/ko/starter/basic-routing.html)

메서드와 url(`/lower`, `/upper` 등)로 분기점을 만드는 것을 라우팅(Routing)이라고 한다.

클라이언트는 특정한 HTTP 요청 메서드(GET, POST 등)와 함께 서버의 특정 URI(또는 경로)로 HTTP 요청을 보냅니다. 라우팅은 클라이언트의 요청에 해당하는 Endpoint에 따라 서버가 응답하는 방법을 결정하는 것

⇒ 라우팅은 클라이언트의 요청에 해당하는 메서드와 URI에 따라 서버가 응답하는 방법을 결정하는 것

```jsx
//Node.js로 라우팅을 구현한 코드
const requestHandler = (req, res) => {
  if (req.url === "/lower") {
    if (req.method === "GET") {
      res.end(data);
    } else if (req.method === "POST") {
      req.on("data", (req, res) => {
        // do something ...
      });
    }
  }
};
```

반면에 Express는 프레임워크 자체에서 라우터 기능을 제공한다. Express의 라우터를 활용하면 아래와 같이 직관적인 코드를 작성할 수 있다.

```jsx
//Express로 라우팅을 구현한 코드
const router = express.Router();

router.get("/lower", (req, res) => {
  res.send(data);
});

router.post("/lower", (req, res) => {
  // do something
});
```

## **Middleware 1**

미들웨어는 자동차 공장과 비슷하다. 컨베이어 벨트 위에 올라가 있는 요청(Request)에 필요한 기능을 더하거나, 문제가 발견된 불량품을 밖으로 걷어내는 역할을 합니다. 미들웨어는 express의 가장 큰 장점이다.

- 미들웨어를 사용하는 상황

1. **POST 요청 등에 포함된 body(payload)를 구조화할 때(쉽게 얻어내고자 할 때)**
2. **모든 요청/응답에 CORS 헤더를 붙여야 할 때**
3. **모든 요청에 대해 url이나 메서드를 확인할 때**
4. **요청 헤더에 사용자 인증 정보가 담겨있는지 확인할 때**

미들웨어를 이용하면 Node.js 만으로 구현한 서버에서는 번거로울 수 있는 작업을 보다 쉽게 적용할 수 있다.

### \***\*case 1: POST 요청 등에 포함된 body(payload)를 구조화할 때\*\***

```jsx
//Node.js로 HTTP body(payload)를 받을 때에는 Buffer를 조합해서
//다소 복잡한 방식으로 body를 얻을 수 있습니다.
//네트워크 상의 chunk를 합치고, buffer를 문자열로 변환하는 작업이 필요
let body = [];
request
  .on("data", (chunk) => {
    body.push(chunk);
  })
  .on("end", () => {
    body = Buffer.concat(body).toString();
    // body 변수에는 문자열 형태로 payload가 담겨져 있습니다.
  });
```

[body-parser 미들웨어](http://expressjs.com/en/resources/middleware/body-parser.html) 를 사용하면 이 과정을 간단하게 처리할 수 있다.

```jsx
//npm으로 body-parser를 설치
npm install body-parser

//body-parser를 미들웨어를 이용한 코드
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// 생략
app.post('/users', jsonParser, function (req, res) {

})

//Express v4.16.0 부터는 body-parser를 따로 설치 하지 않고,
//Express 내장 미들웨어인 express.json()을 사용
const jsonParser = express.json();

// 생략
app.post('/api/users', jsonParser, function (req, res) {

})
```

### \***\*case 2: 모든 요청/응답에 CORS 헤더를 붙일 때\*\***

Node.js HTTP 모듈을 이용한 코드에 CORS 헤더를 붙이려면, 응답 객체의 `writeHead` 메서드 이용할수 있다. Node.js에서는 이 메서드 등을 이용하여 라우팅마다 헤더를 매번 넣어주어야 한다. 그뿐만 아니라, `OPTIONS`
메서드에 대한 라우팅도 따로 구현해야 한다.

```jsx
const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": 10,
};

// 생략
if (req.method === "OPTIONS") {
  res.writeHead(201, defaultCorsHeader);
  res.end();
}
```

[cors 미들웨어](http://expressjs.com/en/resources/middleware/cors.html) 를 사용하면 이 과정을 간단하게 처리할 수 있다.

```jsx
//npm으로 cors를 설치
npm install cors

//모든 요청에 대해 CORS 허용
const cors = require('cors');

// 생략
app.use(cors());

//특정 요청에 대해 CORS 허용
const cors = require('cors')

// 생략
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
```

### \***\*case 3: 모든 요청에 대해 url이나 메서드를 확인할 때\*\***

- **미들웨어** 는 말 그대로 프로세스 중간에 관여하여 특정 역할을 수행합니다. 수많은 미들웨어가 있지만, 가장 단순한 미들웨어 로거(logger)를 예로 들겠다. 로거는 디버깅이나, 서버 관리에 도움이 되기 위해 `console.log`
  로 적절한 데이터나 정보를 출력한다. 데이터가 여러 미들웨어를 거치는 동안 응답할 결과를 만들어야 한다면, 미들웨어 사이사이에 로거를 삽입하여 현재 데이터를 확인하거나, 디버깅에 사용할 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/abebb4cd-f298-42a1-aa2d-a8da82db97f2/Untitled.png)

☝🏻 endpoint가 `/`이면서, 클라이언트로부터 `GET` 요청을 받았을 때 적용되는 미들웨어입니다.

파라미터의 순서에 유의해야한다. `req`, `res`는 우리가 잘 아는 요청(request), 응답(response)이고 `next`는 다음 미들웨어를 실행하는 역할을 합니다.

만약 특정 enpoint가 아니라, 모든 요청에 동일한 미들웨어를 적용하려면 어떻게 해야 할까요? 메서드 [app.use](http://expressjs.com/ko/api.html#app.use)
를 사용

```jsx
const express = require("express");
const app = express();

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000);
```

### \***\*case 4: 요청 헤더에 사용자 인증 정보가 담겨있는지 확인할 때\*\***

다음은 HTTP 요청에서 토큰이 있는지를 판단하여, 이미 로그인한 사용자일 경우 성공, 아닐 경우 에러를 보내는 미들웨어 예제입니다.

> 토큰(Token): 주로 사용자 인증에 사용하며, Section3 인증(Authentication) 유닛에서 다룹니다.

```jsx
app.use((req, res, next) => {
  // 토큰이 있는지 확인, 없으면 받아줄 수 없음.
  if (req.headers.token) {
    req.isLoggedIn = true;
    next();
  } else {
    res.status(400).send("invalid user");
  }
});
```

로그인 없이 웹사이트에 접근을 시도했을 때, 로그인 창으로 되돌려 보내는 경우를 경험해 본 적이 있을 겁니다. 서버에서는 요청에 포함된 데이터를 통해 미들웨어가 요구하는 조건에 맞지 않으면, 불량품으로 판단하고 돌려보내도록 구현할 수 있다.
